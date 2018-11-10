import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export let AppConfig: any = {
  title:
    'Education Support',
  routes: {
    error404: '404',
    dashboard: 'dashboard',
    calculator: 'calculator',
    login: 'login',
    register: 'register',
    user: 'user',
    users: {
      edit: 'edit',
      detail: 'detail'
    }
  },
};


