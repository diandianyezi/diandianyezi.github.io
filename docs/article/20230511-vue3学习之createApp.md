---
title: vue3学习之createApp
date: 2023-05-11
category: Vue
tags:
 - Vue
---



# CreateApp

> 顾名思义，CreateApp作为vue的启动函数，返回一个应用实例

### 从一个例子开始

```js
const HelloVueApp = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')
```

[亲自试试](https://vue3j.cn/run/start.html)

createApp 干了些什么？

ensureRenderer -> createRenderer -> baseCreateRenderer 

baseCreateRenderer 返回了createApp

```js
return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  }
```

1. 调用了`createAppAPI`方法

```js
export function createAppAPI<HostElement>(
  render: RootRenderFunction,
  hydrate?: RootHydrateFunction
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent, rootProps = null) {
    if (rootProps != null && !isObject(rootProps)) {
      __DEV__ && warn(`root props passed to app.mount() must be an object.`)
      rootProps = null
    }

    // 创建默认APP配置
    const context = createAppContext()
    const installedPlugins = new Set()

    let isMounted = false

    const app: App = {
      _component: rootComponent as Component,
      _props: rootProps,
      _container: null,
      _context: context,

      get config() {
        return context.config
      },

      set config(v) {
        if (__DEV__) {
          warn(
            `app.config cannot be replaced. Modify individual options instead.`
          )
        }
      },

      // 都是一些眼熟的方法
      use() {},
      mixin() {},
      component() {},
      directive() {},

      // mount 我们拎出来讲
      mount(
      	rootContainer: HostElement,
        isHydrate?: boolean,
        isSVG?: boolean
      ) {},
      unmount() {},
      // ...
    }

    return app
  }
}
```



2. `createAppContext()` 创建默认app配置

```js
export function createAppContext(): AppContext {
  return {
    app: null as any,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
```

