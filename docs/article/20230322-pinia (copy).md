# Pinia

## 为什么用Pinia?

- Devtools support  **调制工具支持**
    - A timline to track actions, mutations
    - Stores appear in components where ther are used
    - Time travel and easier debugging
- Hot module replacement  **热模块替换**
    - Modify your stores without reloading your page
    - Keep any existing state while developing
- Plugins 插件支持: extend Pinia features with plugins 
- Proper Typescript support or autocompletion for Js Users **支持Typescript**
- Server Side Rendering Support **SSR**

### 简单例子

```js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
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

// 在组件中使用
import { useCounterStore } from '@/stores/counter';

export default {
  setup {
    const counter = useCounterStore()
    counter.count ++
    // with autocompletion ✨
    counter.$patch({count: counter.count + 1});
    // or using an action instead
    counter.increment()
  }
}
```

### 持久化缓存



####  参考

https://juejin.cn/post/7078281612013764616

https://pinia.vuejs.org/
