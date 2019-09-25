import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  //if you want to centralize to avoid duplicade code
  //insert logic/data here is a good way to do it so.
  //data:function (){},
  methods: {
    changeAge(newAge){
        this.$emit('ageWasChanged', newAge);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


