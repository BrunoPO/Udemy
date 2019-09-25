<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,//implicit dash
            Servers,//ES6 allows to just pass the value, it will automaticly create the prop. with the same name.
            'app-server-details': ServerDetails,//explict dash
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
