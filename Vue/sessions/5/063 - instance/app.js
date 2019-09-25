var data = {
  // Vue interacts well with js code, so if it is wanted to use a external varible
  // It will succeed
  title: 'The VueJS Instance',
  showParagraph: false
}

Vue.component('hello',{
  //if you do not put a mark ('.','#') it will be associeted with a tag
  //Vue default behaviour is to be associeted to just one elem
  //The component attr, it is a way to create re-usable pieces on Vue
  template: '<h1> Hello! </h1>'
});

var vm1 = new Vue({
  //The vue can have multiple instances
  //But be aware that the every app/instance is unique and will not be merge
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

setTimeout(function(){
  //you can use the vue instance on pure js as well
  vm1.title = 'Changed by Timer'
  vm1.show();
}, 5000);

vm1.$mount('#app1');
// a vue app can be lately associeted with a element

vm1.$refs.heading.innerText = 'Something else';
//refs can be used to get some htmlElem that refers to some vue refs

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The VueJS Instance'
  },
  methods: {
    onChange: function(){
      //it is possible to access external js values
      //To use something from another vue app you need the instace to you can acess it.
      //It is best practical to unite apps that interact with each other, cuz from logical business it's the component.
      vm1.title = 'Changed by vm2';
      vm1.show();
    }
  }
});

var vm3 = new Vue({
  template: '<h1> vm3 Hello! </h1>'
});

//The same as vm3.$mount('#app3');
vm3.$mount('');
document.getElementById('app3').appendChild(vm3.$el);





