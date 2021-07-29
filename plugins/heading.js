const MyPlugin = {
  install(Vue, options) {
    Vue.component('heading', {
      data() {
        return {
          header: '公仆无无无无错'
        }
      },
      template: `
        <h2>{{header}}</h2>
      `
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}