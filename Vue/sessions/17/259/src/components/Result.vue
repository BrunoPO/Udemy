<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter(){
                // return this.$store.state.counter * 2;
                //see into AnotherResult.vue another way to do this calculation
                return this.$store.state.counter.counter * 2;
                // this need to be adapted to get info from module
            }
        }
    }
</script>