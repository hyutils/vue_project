export const menuItem = [
  {
    title: '首页',
    path: '/home',
    icon: 'HomeFilled',
  },
  {
    title: '数据大屏',
    path: '/screen',
    icon: 'Platform',
  },
  {
    title: '权限管理',
    path: '/acl/user',
    icon: 'Lock',
    children: [
      { title: '用户管理', path: '/acl/user', icon: 'User' },
      { title: '角色管理', path: '/acl/role', icon: 'UserFilled' },
      { title: '菜单管理', path: '/acl/permission', icon: 'Monitor' },
    ],
  },

  {
    title: '商品管理',
    path: '/Product',
    icon: 'Goods',
    children: [
      {
        title: '品牌管理',
        path: '/product/trademark',
        icon: 'ShoppingCartFull',
      },
      {
        title: '属性管理',
        path: '/product/attr',
        icon: 'ChromeFilled',
      },
      {
        title: 'SKU管理',
        path: '/product/sku',
        icon: 'Orange',
      },
    ],
  },
];
