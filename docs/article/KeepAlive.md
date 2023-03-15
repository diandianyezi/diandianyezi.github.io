# KeepAlive

内置组件，可以在动态切换多个组件时视情况缓存组件实例。

## 基本使用

默认情况下，一个活跃的组件实例会在切换之后被卸载，所以会丢失它已有变化的状态。

可以使用 `KeepAlive`组件将这些动态组件包装起来：

```html
<!-- 非活跃的组件将会被缓存！ -->
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>
```

### 包含、排除

默认情况下，会缓存内部的所有组件实例。

- `include`: 需要缓存的组件
- `exclude`：不需要缓存的组件

根据组件的 `name`选项进行匹配，所以组件需要显示声明一个 `name`选项。

```html
<!-- 以英文逗号分隔的字符串 -->
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>

<!-- 正则表达式 (需使用 `v-bind`) -->
<KeepAlive :include="/a|b/">
  <component :is="view" />
</KeepAlive>

<!-- 数组 (需使用 `v-bind`) -->
<KeepAlive :include="['a', 'b']">
  <component :is="view" />
</KeepAlive>
```



### 最大缓存实例数

`max`prop来限制被缓存的最大实例数。

指定了`max`后类似一个`LRU缓存`：如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，为新的实例腾出空间。



```html
<KeepAlive :max="10">
  <component :is="activeComponent"></component>
</KeepAlive>
```



### 缓存实例的生命周期

缓存的组件 可以通过 `OnActivated 和 onDeactivated` 注册相应地两个状态的生命周期钩子：

```js
<script setup>
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})
</script>
```

>请注意：
>
>- `OnActivated`在组件挂载时也会调用， `OnDeactivated`在组件卸载时也会调用。
>- 这两个钩子不仅适用于 `KeepAlive` 缓存的根组件，也适用于缓存树中的后代组件。
