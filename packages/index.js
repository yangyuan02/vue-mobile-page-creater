const registerComponents = (Vue) => {
  Vue.component('c-area-title', () => import('./area-title'))
  Vue.component('c-white-space', () => import('./white-space'))
  Vue.component('c-art-list', () => import('./art-list'))
  Vue.component('c-flex-wrap', () => import('./flex-wrap'))
}

export default registerComponents
