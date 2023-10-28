import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadComponent: () =>
      import('users/feature-users-list/users-list/users-list.component').then(
        (c) => c.UsersListComponent
      ),
  },
];
