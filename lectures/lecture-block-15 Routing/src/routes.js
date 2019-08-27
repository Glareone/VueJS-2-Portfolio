import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
  { path: '', component: Home },
  // id is a dynamic path of route. user/alex.
  //{ path: '/user/:id', component: User, props: true },
  // props is dynamic part of data which could be attached to route and delivered to component.
  // props could be a simple object and also a function. props: { userId: 10 }. Will be places in props in component
  { path: '/user/:id', component: User, props: (route) => ({ userId: route.params.id }) },
];