<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p v-if="email"> You're email address {{email}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    computed:{
      email(){
        const user = this.$store.getters.user;
        return user ? user.email : false;
      }
    },
    created(){
      /* axios.get('/user.json')
        .then( res => {
            const users = Object.entries(res.data).reduce((arr, entry) => {
                var user = entry [1];
                entry[1].id = entry[0];
                arr.push(user);
                return arr;
            }, []);
            this.email = users[0].email;
        }).catch(err => {console.log(err)}); */
        this.$store.dispatch('fetchUser');
    }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>