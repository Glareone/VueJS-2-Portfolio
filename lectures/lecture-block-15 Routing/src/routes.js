// Transform to lazy loading below:
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

// PAY ATTENTION ON System.import: https://stackoverflow.com/questions/45219086/vue-router-cannot-lazy-load-component-unexpected-token
// Comments /**/ - special webpack syntax to group this bundles into one with name user. // https://router.vuejs.org/guide/advanced/lazy-loading.html
// But seems like it doesn't work in this example. May be because of System.import instead of import. May be we need to take a look on webpack config:
// https://webpack.js.org/guides/code-splitting/

// lazy loading for components.
// special webpack syntax.
// this code will recognize by webpack to place it not in our general bundle, but in other place to allow load it if necessary

const User = () => System.import(/* webpackChunkName: "user" */'./components/user/User.vue');
const UserStart = () => System.import(/* webpackChunkName: "user" */'./components/user/UserStart.vue');
const UserDetail = () => System.import(/* webpackChunkName: "user" */'./components/user/UserDetail.vue');
const UserEdit = () => System.import(/* webpackChunkName: "user" */'./components/user/UserEdit.vue');

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
      { path: ':id', component: UserDetail, props: (route) => ({ userId: route.params.id }), beforeEnter: (to, from, next) => {
          console.log('inside route setup, beforeEnter'); // will raise only on user details page. More generic in routes.js.
          // Also take a look on beforeRouteEnter() in userDetails page (lifecycle hook).
          next(); // same things. next navigation without parameters.
          // next(false) will abort next routing.
          // next({params, path}) routing with parameters.
        }
      },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }, // name -a special ability to use named route instead of writing full path in router-link.
    ]
  },
  // and finally the default route, when none of the above matches:
  { path: '*', redirect: '/home' } // redirect example. Also you could use object instead of string to pass some parameters.
];