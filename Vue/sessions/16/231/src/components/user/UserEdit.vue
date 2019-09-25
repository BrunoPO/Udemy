<template>
    <div>
        <h3>Edit the User</h3>
        <p>Loaded ID: {{ this.$route.params.id }} </p>
        <p>Locale: {{ this.$route.query.locale }} </p>
        <p>Analitics: {{ this.$route.query.q }} </p>
        <div style="height:700px; background-color: blue"></div>
        <button class="btn btn-primary" @click="confirmed = true">Confirmed</button>
        <p id="data" >Analitics: {{ this.$route.query.q }} </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                confirmed: false
            }
        },
        beforeRouteLeave(to, from, next){
            if(this.confirmed){
                next();
            }else{
                if(confirm('Are you sure?')){
                    next();
                }else{
                    next(false);
                }
            }
        }
    }
</script>
