import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/pages/HomeView.vue';
import TreeView from '@/pages/TreeView.vue';
import HouseView from '@/pages/HouseView.vue';
import CrosswordPage from '@/pages/CrosswordPage.vue';
import LoginPage from '@/pages/auth/LoginPage.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayuot from '@/layouts/AuthLayuot.vue';
import TreeLayout from '@/layouts/TreeLayout.vue';
import HouseLayout from '@/layouts/HouseLayout.vue';
import RegPage from '@/pages/auth/RegPage.vue';

import Request from '@/services/Request';


const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          component: HomeView,
          meta: {
            auth: true,
            ghost: false
          },
        },
      ]
    },
    {
        path: '/tree',
        component: TreeLayout,
        children: [
            {
                path: '',
                component: TreeView,
                meta: {
                  auth: true,
                  ghost: false
                },
            },
        ]
    },
    {
        path: '/house',
        component: HouseLayout,
        children: [
            {
                path: '',
                component: HouseView,
                meta: {
                  auth: true,
                  ghost: false
                },
            },
        ]
    },
    {
        path: '/crossword',
        component: MainLayout,
        children: [
            {
                path: '',
                component: CrosswordPage,
                meta: {
                  auth: true,
                  ghost: false
                },
            },
        ]
    },
    {
      path: '/login',
      component: AuthLayuot,
      children: [
        {
          path: '',
          component: LoginPage,
          meta: {
            auth: false,
            ghost: true
          },
        },
      ]
    },
    {
      path: '/registration',
      component: AuthLayuot,
      children: [
        {
          path: '',
          component: RegPage,
          meta: {
            auth: false,
            ghost: true
          },
        },
      ]
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  if (from === to) {
      return false
  }

  if (!to.matched.length) {
      next('/')
  }

  const ghostRoute = to.matched.some(record => record.meta.ghost)
  const guardRoute = to.matched.some(record => record.meta.auth)
  const authorized = Request.tokenExists()

  console.log(guardRoute, authorized)

  if (ghostRoute) {
    if (authorized) {
      next({path: "/"})
      return false
    }
  }

  if (guardRoute) {
    if (!authorized) {
      next({path: "/login"})
      return false
    }
  }
  next()
})

export default router
