<template>
  <div>
    <p>Server status: {{status}}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
    //Be aware that the root need to have just one elem. an the template will be removed
    export default {
        data: function(){
            return{
              status: 'Critical'
            }
        },
        methods: {
          changeStatus(){
            this.status = 'Normal'
          }
        }
    }
</script>

<style lang="scss">
</style>
