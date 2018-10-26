import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  title:
    'Education Support',
  isLoggedIn:
    false,
  routes: {
    error404: '404',
    dashboard: 'dashboard',
    user: 'user',
    users: {
      edit: 'edit',
      detail: 'detail',
      login: 'login',
      register: 'register',
    }
  },
};
