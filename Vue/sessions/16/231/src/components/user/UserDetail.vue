<template>
    <div>
        <h3>Some User Details</h3>
        <p>Loaded ID: {{ this.$route.params.id }} </p>
        <router-link 
                tag="button"
                :to="link"
                class="btn btn-primary">
            Edit User
        </router-link>
        <!-- 
            :to="'/user/'+ $route.params.id + '/edit'"
            is another way to do it, but the way above better/cleaner, the use of name is optional 
            it is possible to use path instead
         -->
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            link: {
                name: 'userEdit', 
                params: {id: this.$route.params.id}, 
                query:{locale: 'en', q:100},
                hash:"#data"
            }
        }
    },
    beforeRouteEnter(to, from, next){
        // this.link; this will not work cuz this component is not processed yet
        next( vm =>{
            // vm.link; 
            //this is allow here into this callback (this will be called after the component be rendered)
        });//for more options of the next see Global beforeEach 
    }
}
</script>
