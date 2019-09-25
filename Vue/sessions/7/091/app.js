
//Vue.component('Name',{}) it's a global component
var cmp = {//this is a obj that will be a local comp
  data: function(){//add a function to garatee the unicity of the ref. returned
    return {
      status: 'Critical'
    }
  },
  template:'<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)',
  methods:{
    changeStatus: function(){
      this.status = 'Normal'
    }
  }
};

new Vue({
  el: '#app',
  components:{
    'my-cmp': cmp
  }
});

new Vue({
  el: '#app2'
});
