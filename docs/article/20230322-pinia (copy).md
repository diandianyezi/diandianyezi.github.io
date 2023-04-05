# Pinia

参考

https://juejin.cn/post/7078281612013764616

https://pinia.vuejs.org/

## 为什么用Pinia?

- Devtools support  **调制工具支持**
    - 追踪 actions, mutations 的时间线；
    - 在组件中展示它们所用到的Store；
    - 让调试更容易的Time travel。
- **热更新**
    - 不必重载页面即可修改Store
    - 开发时可保持当前的State
- Plugins 插件支持: 通过插件扩展pinia功能
- 为 JS 开发者提供适当的 TypeScript 支持以及**自动补全**功能
- Server Side Rendering Support **SSR**

### 简单例子

```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```



```js
// store/counter.js
import { defineStore } from 'pinia'

// defineStore 返回的是一个函数
// defineStore 第一个参数为独一无二的名字 ，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。
// 第二个参数 可接收两类值：Setup函数或Option对象
// ---OptionStore
export const useCounterStore = defineStore('count', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
// 为实现更高级用法，甚至可以使用一个函数来定义Store
// --- Setup Store
//ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
export const useUserCounter = defineStore('counter', () => {
  const counter = ref(0);
  function increment() {
    counnter.value++
  }
  return {
    counter,
    increment
  }
})

// 在组件中使用
<script>
import { useCounterStore } from '@/stores/counter';

export default {
  setup {
    const counter = useCounterStore()
    // 修改count属性的4种方式
    // 方式1
    counter.count ++
    // with autocompletion ✨
    // 方式2
    counter.$patch({count: counter.count + 1});
    // or using an action instead
    // 方式3 
		counter.increment();
    // 方式4
    counter.$patch((state) => state.count++);
  }
}
</script>
<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
</template>
```

pinia中没有`mutation`，同步异步修改都在`actions`中，



### 对比Vuex

与 Vuex 相比，Pinia 不仅提供了一个更简单的 API，也提供了符合组合式 API 风格的 API，最重要的是，搭配 TypeScript 一起使用时有非常可靠的类型推断支持。

#### 对比Vuex3.x/4.x

>Vue 3.x 只适配Vue 2，而Vue 4.x是适配Vue 3的



Pinia与Vuex 有很多不同：

- mutation已被弃用；
- 无需创建自定义的复杂包装器来支持TypeScript，一切都可标注类型，API的设计方式是尽可能地利用TS类型推导；
- 无过多的魔法字符串注入，只需要导入函数并调用它们
- 无需要动态添加Store，默认是动态的
- 不再有嵌套结构的模块。
- 不再有可命名的模块

---

## Store是什么

保存状态和业务逻辑的实体，并不与组件树绑定。承载着全局状态，有点像永远存在的组件，每个组件都可以读取和写入它。它有三个概念 `state`、`getter`、`action`。



### 什么时候使用Store？

包含可以在整个应用中访问的数据。



解构访问store的属性时，会使其失去响应性，需要使用 `storeToRefs()`，将为每个响应式属性创建引用。

> 可以直接从 store 中解构 action

```js
<script setup>
const store = useCounterStore()
// ❌ This won't work because it breaks reactivity
// it's the same as destructuring from `props`
const { name, doubleCount } = store 
name // will always be "Eduardo" 
doubleCount // will always be 0 
setTimeout(() => {
  store.increment()
}, 1000)
// ✅ this one will be reactive
// 💡 but you could also just use `store.doubleCount` directly
const doubleValue = computed(() => store.doubleCount)
</script>
```

## State

store的核心。state被定义为一个返回初始状态的函数，使得pinia可以同事支持服务端和客户端。

> 如果你使用的是 Vue 2，你在 `state` 中创建的数据与 Vue 实例中的 `data` 遵循同样的规则，即 state 对象必须是清晰的，当你想向其**添加新属性**时，你需要调用 `Vue.set()` 

### Typescript

不需要做过多就可以兼容TS，Pinia会自动推断出state的类型。

### 访问State

```js
const store = useStore();
store.count++
```

### 重置State

调用store的`$reset()` 方法将state重置为初始值。

```js
const store = useStore();

store.$reset()
```

使用`mapState()`辅助函数可以将state属性映射为只读的计算属性：

```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // 可以访问组件中的 this.count
    // 与从 store.count 中读取的数据相同
    ...mapState(useCounterStore, ['count'])
    // 与上述相同，但将其注册为 this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'count',
      // 你也可以写一个函数来获得对 store 的访问权
      double: store => store.count * 2,
      // 它可以访问 `this`，但它没有标注类型...
      magicValue(store) {
        return store.someGetter + this.count + this.double
      },
    }),
  },
}

```



### 变更State

`$patch`

```js
store.$patch({
  count: store.count+1,
  ag2: 120,
  name: 'test'
})

// $patch 也可接收一个函数，来实现复杂对象的更改
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})

```



### 替换State

不能完全替换掉store的state，会破坏响应性。但是可以通过 $patch来修改

```js
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })

```

你也可以通过变更 `pinia` 实例的 `state` 来设置整个应用的初始 state。这常用于 [SSR 中的激活过程](https://pinia.vuejs.org/zh/ssr/#state-hydration)。

```js
pinia.state.value = {}
```



### 订阅State

类似于Vuex的`subscribe`方法，可以通过`store`的`$subscribe()`方法侦听state及其变化。

与watch相比，`$subscribe()`的好处是subscriptions在patch后只触发一次。

```js
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem('cart', JSON.stringify(state))
})

```



默认情况下，*state subscription* 会被绑定到添加它们的组件上 (如果 store 在组件的 `setup()` 里面)。这意味着，当该组件被卸载时，它们将被自动删除。如果你想在组件卸载后依旧保留它们，请将 `{ detached: true }` 作为第二个参数，以将 *state subscription* 从当前组件中*分离*：



可以在pinia实例上使用watch函数侦听整个state。

## Getter

等同于state的计算值，通过defineStore的getters属性定义，**推荐**使用箭头函数，并且它将接收 `state` 作为第一个参数：

getter不仅依赖于state，也可能依赖于别的getter

```js
export const useStore = defineStore('main', {
  state: () => ({count: 0}),
  getters: {
    doubleCount: (state) => state.count * 2,
    doublePlusOne():number {
    	return this.doubleCount + 1
  	}
  }
})
```

即使在使用常规函数定义 getter 时，我们也可以通过 `this` 访问到**整个 store 实例**。

### 访问其他Getter

通过`this`可以访问到



### 向getter传递参数

Getter是一个计算属性，不可以传递任何参数。但是可以从getter返回一个函数，该函数可以接受任意参数:

```js
export const useStore = defineStore('counter', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    }
  }
})
```

但是，这样做时，**getter将不再被缓存**，只是一个被调用的函数，但是可以在getter本身中缓存一些结果。



### 访问其他Store的getter

可以直接在getter内部使用其他Store的getter



### 使用`setup()`市的用法

可以直接访问任何getter

```js
<script setup>
const store = useCounterStore()
store.count = 3
store.doubleCount // 6
</script>
```

### 不使用 `setup()`

可是使用 `mapState`等辅助函数，将其映射为getters

```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // 允许在组件中访问 this.doubleCount
    // 与从 store.doubleCount 中读取的相同
    ...mapState(useCounterStore, ['doubleCount']),
    // 与上述相同，但将其注册为 this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'doubleCount',
      // 你也可以写一个函数来获得对 store 的访问权
      double: store => store.doubleCount,
    }),
  },
}
```

## Action

相当于组件的methos。可以通过`defineStore()`中的 `actions`属性来定义。

- 可以通过`this`访问整个`store`实例；
- 可以是同步的，也可以是异步的，可以使用`await`调用任何API，及其他action；
- 可以自由地设置任何你想要的参数以及返回任何结果，当调用action时，一切类型都可以被自动推断出来；
- Action 可以像函数或者通常意义上的方法一样被调用。

### 访问其他store的action

直接引入其他store，并调用



### 在 `setup`中使用 

```vue
<script>
import { useCounterStore } from '../stores/counter'
export default defineComponent({
  setup() {
    const counterStore = useCounterStore()
    return { counterStore }
  },
  methods: {
    incrementAndPrint() {
      this.counterStore.increment()
      console.log('New Count:', this.counterStore.count)
    },
  },
})
</script>

```

### 不使用 `setup()` 

使用 `mapActions`辅助函数将 action映射为你组件中的方法。

```js
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  methods: {
    // 访问组件内的 this.increment()
    // 与从 store.increment() 调用相同
    ...mapActions(useCounterStore, ['increment'])
    // 与上述相同，但将其注册为this.myOwnName()
    ...mapActions(useCounterStore, { myOwnName: 'increment' }),
  },
}
```



### 订阅`action`

可以通过 `store.$onAction()`来监听action和它们的结果。传递给它的回调函数会在action本身之前执行。

demo如下：

```js
const unsubscribe = someStore.$onAction(
  ({
    name, // action 名称
    store, // store 实例，类似 `someStore`
    args, // 传递给 action 的参数数组
    after, // 在 action 返回或解决后的钩子
    onError, // action 抛出或拒绝的钩子
  }) => {
    // 为这个特定的 action 调用提供一个共享变量
    const startTime = Date.now()
    // 这将在执行 "store "的 action 之前触发。
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 这将在 action 成功并完全运行后触发。
    // 它等待着任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回一个拒绝的 promise，这将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// 手动删除监听器
unsubscribe()
```

默认情况下，*action 订阅器*会被绑定到添加它们的组件上(如果 store 在组件的 `setup()` 内)。这意味着，当该组件被卸载时，它们将被自动删除。如果你想在组件卸载后依旧保留它们，请将 `true` 作为第二个参数传递给 *action 订阅器*，以便将其从当前组件中分离：

```vue
<script setup>
const someStore = useSomeStore()
// this subscription will be kept even after the component is unmounted
someStore.$onAction(callback, true)
</script>
```



## 插件

可扩展的内容：

- 为store添加新的属性
- 定义store时增加新的选项
- 为store添加新的方法
- 包装现有的方法
- 改变甚至取消action
- 实现副作用
- 仅应用插件于特定store

### 使用

插件是通过 `pinia.use()` 添加到 pinia 实例的。

```js
import { createPinia } from 'pinia'

// 创建的每个 store 中都会添加一个名为 `secret` 的属性。
// 在安装此插件后，插件可以保存在不同的文件中
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

const pinia = createPinia()
// 将该插件交给 Pinia
pinia.use(SecretPiniaPlugin)

// 在另一个文件中
const store = useStore()
store.secret // 'the cake is a lie'
```

这对添加全局对象很有用，如路由器、modal 或 toast 管理器。

### 简介

Pinia插件是一个函数，可以选择性地返回要添加到store的属性，接收一个可选性参数 `context`：

```js
export function myPiniaPlugin(context) {
  context.pinia // 用 `createPinia()` 创建的 pinia。 
  context.app // 用 `createApp()` 创建的当前应用(仅 Vue 3)。
  context.store // 该插件想扩展的 store
  context.options // 定义传给 `defineStore()` 的 store 的可选对象。
  // ...
}
```

