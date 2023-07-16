export const menuItem = [
  {
    title: '首页',
    path: '/home',
    icon: 'Edit',
  },
  {
    title: '用户',
    path: '/data',
    icon: 'Edit',
    children: [
      { title: '权限管理', path: '/data1', icon: 'Edit' },
      { title: '用户列表', path: '/data2', icon: 'Edit' },
      { title: '数据3', path: '/data3', icon: 'Edit' },
    ],
  },
  {
    title: '大屏展示',
    path: '/three',
    icon: 'Edit',
  },
  {
    title: '数据',
    path: '/four',
    icon: 'Edit',
  },
];
