<template>
    <div>
        <p>New Quote</p>
        <button @click="counter++">Increase!</button>
        <p>Counter: {{counter}}</p>
    </div>
</template>

<script>
    //slot let to replace a part of the content even if its outter data is a html
    //if no data is passed, than the slot will render the default(info btw the tags)
    export default{
        data: function(){
            return {
                counter: 0
            }
        },
        destroyed(){
            //The default behavior is to detroy after change from the component tag
            //but it can be change with the keep-alive tag
            console.log("detroyed!");
        },
        deactivated(){
            //Now that we are using the keep-alive we may want to use this 2 methods (deactivated, activated)
            //cuz we dont detroy the component anymore
            console.log("deactivated!");
        },
        activated(){
            console.log("activated!");
        }
    }
</script>

<style scoped>
</style>
