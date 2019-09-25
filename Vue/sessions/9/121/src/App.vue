<template>
    <div class="container">
        <div class="row">
            <button @click=" selectedComponent = 'appQuote'">appQuote</button>
            <button @click=" selectedComponent = 'appAuthor'">appAuthor</button>
            <button @click=" selectedComponent = 'appNew'">appNew</button>
            <p>{{selectedComponent}}</p>
            <div class="col-xs-12">
                <keep-alive>
                    <component :is="selectedComponent">
                        <template slot="title">
                            <h2 >{{ quote }}</h2>
                            <h2 >here:</h2>
                        </template>
                        <p>A wonderful Quote</p>
                    </component>
                </keep-alive>
                <!-- Another Way to call a component is use the component tag, the advantage of use it is possible to modify the component dynamically -->
               <!-- <app-quote>

               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './componnets/Quote.vue';
    import Author from './componnets/Author.vue';
    import New from './componnets/New.vue';

    export default {
        data: function(){
            return{
                quote: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>


<style scoped>
    h2{
        color: blue;
        /* even the template is shown in this file the template style preffered used will be in the child component*/
        /* notice that is not true when we talk about script */
    }
</style>
