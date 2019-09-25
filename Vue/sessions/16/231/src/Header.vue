<template>
    <ul class="nav nav-pills">
        <!-- <li class="presentation"><router-link to="/">Home</router-link></li> -->
        <!-- a href="#" could haddle correctly,
         but it would limit how can a the link would be set up,
         and every click it call a request
         instead the router-link listens to the click and loads the correct route  -->
         
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
        <!-- just the router-link elem have the infos like where we are
        ,so the outter li couldn't know when to be active
        to have this behaviour we can make some changes and the router-link create a 'li', instead an 'a' 
        (Notice that we still needing a link to be listered)-->
    </ul>
</template>
