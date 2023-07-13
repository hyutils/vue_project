export const menuItem = [
  {
    title: '首页',
    path: '/home',
  },
  {
    title: '用户',
    path: '/data',
    children: [
      { title: '权限管理', path: '/data1' },
      { title: '用户列表', path: '/data2' },
      { title: '数据3', path: '/data3' },
    ],
  },
  {
    title: '大屏展示',
    path: '/three',
  },
  {
    title: '数据',
    path: '/four',
  },
];
