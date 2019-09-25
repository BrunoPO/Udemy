import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);
// here is the import of VueRouter that was already install by npm
// this lib is necessary cuz the Vue is a SPA(Sigle Page Application)
// and this lib do the vue load pages in a easier way.

const router = new VueRouter({
  routes,
  mode: 'history',
  //The other way to use mode is the default (hash),
  //On the hash mode it needs to pass from a page(# or index.html or App.vue (it's all the 'same')) and them load the page
  //with the 'history' mode the app will always pass first into index and them to the page (even on 404)
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
      //this will jump to the savedPosition (ex: when a user click back and the page jump to where the user was in the page)
    }else if(to.hash){
      return {selector: to.hash};
      //this is make to jump to the selected hash (ex: #data)
    }else{
      return {x: 0, y: 0};
      // this return is optional, cuz this is the default behaviour
    }
  }
});

router.beforeEach((to, from, next) => {
    //This will be process on every router
    console.log('global beforeEach');
    next();
    // next(false); will abort
    // next({name: 'userEdit'}); will redirect to 'userEdit'
});

new Vue({
  el: '#app',
  router,
  //the router instance need to be passed to the app
  render: h => h(App)
})
