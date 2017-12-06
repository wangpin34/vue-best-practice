import Vue from 'vue'
import Router from 'vue-router'
import FormDemo from '@/components/form/FormDemo'
import NotFound from '@/components/notfound/NotFound'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/form_demo',
      name: 'formdemo',
      component: FormDemo
    },

    {
      path: '/not_found',
      name: 'notfound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/notFound')
  } else {
    next()
  }
})

export default router
