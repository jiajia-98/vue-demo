import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//导入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//导入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: '2pbdKD5iSTaG7OGLqpL3Vlso6qWjvWAA'
})
//导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
