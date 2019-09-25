<template>
    <div>
        <button class="btn btn-primary" @click="AsyncIncrement({by: 100, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="AsyncDecrement({by: 50, duration: 1000})">Decrement</button>
        <input type="text" class="form-control" v-model="value">
        <p>{{ value }}</p>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        computed: {
            value: {
                get(){
                    return this.$store.getters.value
                },
                set(value){
                    //here is a exception of use 
                    //the set is not normally used because the computed property is infos that have some computation bfr you get.
                    return this.$store.dispatch('updateValue', value);
                    //dispatch command send the commit with one arg
                }
            }
        },
        methods: {
            ...mapActions(['AsyncIncrement', 'AsyncDecrement'])
            //you can also use this.$store.commit('increment') command to call the method, but we have to got a func to do it
        }
    }
</script>