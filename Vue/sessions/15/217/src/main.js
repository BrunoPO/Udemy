import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-ce381.firebaseio.com/';//data.json
//this is a optional root of the url

Vue.http.interceptors.push((req, next) => {
    console.log(req);
    if(req.method == 'POST'){
        req.method = 'PUT'//PUT will overwrite in firebase
        // it will change to PUT, this is just ex. how to intercept the requesition
        //bfr is send
    }
    next(response => {//take of doing it, cuz it will overwrite on every request of the app.
        response.json = () =>{
            return{
                messages: response.body
            }
        }
    });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
