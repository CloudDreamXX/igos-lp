import type { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import { HomePage } from '../../../pages/HomePage';
import { Dashboard } from '../../../pages/Dashboard';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: createElement(HomePage),
  },
  { path: '/dashboard', element: createElement(Dashboard) },
];
