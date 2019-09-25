<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <!-- <app-header></app-header> -->
                <router-view name="header-top"></router-view>
                <transition name="fade" mode="out-in">
                    <!-- router-view works well with transition 
                        so all your knowlegde about animation in vue can be re-used here 
                    -->
                    <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
                <!-- the tag above tell to vue where to render the routered page -->
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue'
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .5s;
        /* opacity: 1; */
    }
    .fade-leave{
        /* This to state already have as deafult value the opacity to 1 */
        /* opacity: 1; */
    }
    .fade-leave-active{
        transition: opacity .3s;
        opacity: 0;
    }
</style>
