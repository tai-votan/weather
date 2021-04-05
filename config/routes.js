export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: './Welcome',
      },
    ]
  },
  {
    component: './404',
  },
];
