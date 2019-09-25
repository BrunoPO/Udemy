import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{//This is the way to have global directives
  bind(el, binding, vnode){// it's good to maintain the varible with this names
    // el.style.backgroundColor = 'green';
    //el. let you interact with the element
    // el.style.backgroundColor = binding.value;
    //binding. let you interact with the bind (properties,arg , modifiers...)
    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
    }, delay);
    

  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
