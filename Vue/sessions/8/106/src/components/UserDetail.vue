<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>{{ switchName() }}</p>
        <p>User Age is {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default{
        //props:['myName'], 
        //Props is a way to get information from out of the app
        //with props you take from the attributes from the tag
        //A child can not pass to another child directly.
        //The infomation comunication is unidirectional, so the child can only receive/pass
        //info for the parent.
        props:{
            userAge: Number,
            //you can also specify the type you want
            myName:{
                type: String,
                required: true
                //and other treatments like: required and default
            },
            resetFn: Function
            //Another way to maintain the data update
                //in both sides is to use a function of the parent app.
        },
        methods: {
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName = 'Max';
                this.$emit('nameWasReset', this.myName);
                //$emit, remmenber that $ means it's vue internal command
                //this command emit a custom event to upper app can get the info.
            }
        },
        created(){
            eventBus.$on('ageWasChanged', (data) => {
                this.userAge = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
