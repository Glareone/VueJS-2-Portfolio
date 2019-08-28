import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Header from './components/Header.vue';

export const routes = [
  { path: '', name: 'home', components: {
      default: Home, // without name
      'header-top': Header,
    } },
  // id is a dynamic path of route. user/alex.
  // { path: '/user/:id', component: User, props: true },
  // props is dynamic part of data which could be attached to route and delivered to component.
  // props could be a simple object and also a function. props: { userId: 10 }. Will be places in props in component
  // { path: '/user/:id', component: User, props: (route) => ({ userId: route.params.id }) },


  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header // what exactly will be. Take a look on App.vue.
    },
    // children - children routes
    children: [
      // without anything in a path it will lead us to a parent route.
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail, props: (route) => ({ userId: route.params.id }) },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }, // name -a special ability to use named route instead of writing full path in router-link.
    ]
  },
  // and finally the default route, when none of the above matches:
  { path: '*', redirect: '/home' } // redirect example. Also you could use object instead of string to pass some parameters.
];