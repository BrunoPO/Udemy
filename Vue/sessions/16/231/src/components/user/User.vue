<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!-- <p>Loaded ID:{{ id }}</p> -->
        <button @click="navigateToHome" class="btn btn-primary"> Go To Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    /* data: function(){
        return{
            id: this.$route.params.id
            // route is a variable that have infos about the current request,
            // one of the infos is the params   (url Params, not query Params(params after the ? on url))
        }
    },
    watch:{
        '$route'(to, _from){
            // the vue re-use the component instead of reload every request
            //so to identify that some infos, in this case the id, was modified
            //we can watch if the route was modified
            this.id = to.params.id;
        }
    }, */
    methods:{
        navigateToHome(){
            // this.$router.push('/');
            // On every child of the router we have the comp. $router that let we interact 
            //with the navegation
            this.$router.push({name: 'home'});
            // {path:{'/'}} it's also a valid way of do it
            
        }
    }    
}
</script>
