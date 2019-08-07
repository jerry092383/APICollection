import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import YouBike from '@/components/pages/YouBike'
import News from '@/components/pages/News'
import GIF from '@/components/pages/GIFSearch'
import PixelBay from '@/components/pages/PixelBay'
import PhotoShare from '@/components/pages/PhotoShare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/youbike',
      name: 'YouBike',
      component: YouBike,
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/photoshare',
      name: 'PhotoShare',
      component: PhotoShare,
      children: [
        {
          path: '',
          name: 'GIF',
          component: GIF
        },
        {
          path: 'pixelbay',
          name: 'PixelBay',
          component: PixelBay
        }
      ]
    },
  ]
})
