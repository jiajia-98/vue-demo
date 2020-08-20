const Child = [{
    path: '/firstpage',
    name: 'firstpage',
    component: () => import('@/views/FirstPage.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/Test.vue')
  },
  {
    path: '/mapone',
    name: 'mapone',
    component: () => import('@/views/echarts/echartsMap/MapOne.vue')
  },
  {
    path: '/maptwo',
    name: 'maptwo',
    component: () => import('@/views/echarts/echartsMap/MapTwo.vue')
  },
  {
    path: '/mapcity',
    name: 'mapcity',
    component: () => import('@/views/echarts/echartsMap/MapCity.vue')
  },
  {
    path: '/mapchina',
    name: 'mapchina',
    component: () => import('@/views/echarts/echartsMap/MapChina.vue')
  },
  {
    path: '/lineone',
    name: 'lineone',
    component: () => import('@/views/echarts/echartsLine/LineOne.vue')
  },
  {
    path: '/baiduone',
    name: 'baiduone',
    component: () => import('@/views/map/BaiduMap/BaiduOne.vue')
  },
  {
    path: '/swiperone',
    name: 'swiperone',
    component: () => import('@/views/swiper/SwiperOne.vue')
  }
]
export default Child