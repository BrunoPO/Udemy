<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label> Username </label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label> Email </label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click="submit">Submit</button>
                </div>
                <hr>
                    <input type="text" class="form-control" v-model="node">
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users" v-bind:key="u">{{u.username}} - {{u.email}}</li>
                </ul>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return{
                user:{
                    username: '',
                    email: ''
                },
                resource: {},
                users: [],
                node: ''
            }
        },methods:{
            submit(){
                /* this.$http.post('', this.user)
                //the first arg is the relative url (or absolute url if it haven't root url)
                .then(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                }); */
                // console.log(this.user);
                // this.resources.save({}, this.user);
                console.log(this.resource);
                this.resource.saveAlt(this.user);
            }, fetchData(){
                //this.$http.get('data.json')
                this.resource.getData({node: this.node})
                .then(response => {
                    //console.log(response);//it will get the promisse from the get
                    return response.json();
                }, error => {
                    console.log(error);
                }).then(data =>{//this will open up the inner promise
                    console.log(data);
                    // this.users = Object.values(data);messages
                    this.users = Object.values(data.messages);
                    //get infos from body into a array
                    //Trade-off: you will lose the id-keys
                })
            }
        },created(){
            const customActions = {
                saveAlt: {method:'POST', url:'alternative.json'},
                getData: {method:'GET', url:'{node}.json'}
            }
            this.resource = this.$resource('data.json', {}, customActions);
        }
    }
</script>

<style>
</style>
