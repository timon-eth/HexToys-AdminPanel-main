import { lazy } from 'react';

// use lazy for better code splitting
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Collections = lazy(() => import('../pages/collection/Collections'));
const EditCollection = lazy(() => import('../pages/collection/EditCollection'));


const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/collections',
    component: Collections,
  },
  {
    path: '/edit-collection/:address',
    component: EditCollection,
  },  
];

export default routes;
