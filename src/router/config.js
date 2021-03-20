import { lazy } from 'react';

const routerConfig = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./../pages/FriendList')),
  },
];

export default routerConfig;
