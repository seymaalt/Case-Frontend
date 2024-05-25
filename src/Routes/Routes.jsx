import { Register,UserList } from '../page';

export const routes = [
  {
    path: '/users',
    element: UserList,
  },
  {
    path: '/signUp',
    element: Register,
  }
];
