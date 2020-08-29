import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

 // 无需配置权限页面
export const constantRoutes = [
  { // 404页面
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { // 主页
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }

  { // 主页面板
    path: '/dashboard',
    component: () => import('@/views/Dashboard'),
    meta: { title: '主页面板', icon: '@/assets/header/dashboard_ic_none.svg' },
  },
  { // 区块链
    path: '/blocks',
    component: () => import('@/views/Blocks'),
    meta: { title: '区块链', icon: '@/assets/header/blocks_ic_none.svg' },
  },
  { // 交易
    path: '/transactions',
    component: () => import('@/views/Transactions'),
    meta: { title: '交易', icon: '@/assets/header/transactions_ic_none.svg' },
  },
  { // 资产
    path: '/assets',
    component: () => import('@/views/Assets'),
    meta: { title: '资产', icon: '@/assets/header/assets_ic_none.svg' },
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
