<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Clicks is: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            counter(){
                return this.$store.getters.doubleCounters;
                //this a better way to get info from the store
                //cuz the some process can be centralized and avoid re-code and some pages
            },
            ...mapGetters([
                //this is a easier way to get the gettter from the store
                'stringCounter'
            ])
        }
    }
</script>