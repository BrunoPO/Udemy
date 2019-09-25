<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade" selected>Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click ="show = !show"> Show Alert </button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">
                        This is some info
                    </div>
                </transition>
                
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">
                        This is some info
                    </div>
                </transition>
                
                <transition 
                    enter-active-class="animated bounce" 
                    leave-active-class="animated shake" >
                    <!-- 
                        other class that can be explicit called:
                        enter-class=""
                        leave-class=""
                     -->
                    <div class="alert alert-info" v-if="show"> This is some info </div>
                </transition>
                
                <transition :name="alertAnimation" mode="out-in">
                    <!-- 
                        The 'out-in' organize the animation to 
                        do not render new stuff bfr the out stuff be out of screen.
                    -->
                    <div class="alert alert-info" v-if="show" key="info"> This is some info </div>
                    <div class="alert alert-warning" v-else key="warning"> This is some info </div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Elements</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">
                    <!-- 
                        :css="false"
                        it's necessary to say to vue that do not search for css classes 
                        v-enter, v-enter-active and so on,
                         skiping the checking for classes that does not exists
                     -->
                    <div style="width:300px; height:100px; background-color:lightgreen" v-if="load"></div>
                </transition>
                <hr>
                <button 
                    class="btn btn-primary"
                    @click="selectedComponenent = (selectedComponenent == 'app-sucess-alert')
                    ?'app-danger-alert':'app-sucess-alert'"
                >Toggle Component</button>
                <br><br>

                <transition name="fade" mode="out-in">
                    <component :is="selectedComponenent"></component>
                </transition>

                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li 
                            class="list-group-item"
                            v-for="(number, index) in numbers"
                            v-bind:key="number"
                            @click="removeItem(index)"
                            style="cursor:pointer">{{ number }}
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue'
    import SucessAlert from './SucessAlert.vue'

    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade',
                elementWidth: 300,
                selectedComponenent: 'app-sucess-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el){
                console.log("beforeEnter");
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el,done){
                console.log("enter");
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    if(++round > 20){
                        clearInterval(interval);
                        done();
                        //The done function it's necessary to say to the 
                            // Vue.js that we finished our animation
                    }
                },20);
            },
            afterEnter(el){
                console.log("afterEnter");
            },
            enterCancelled(el){
                console.log("enterCancelled");
            },
            beforeLeave(el){
                console.log("beforeLeave");
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done){
                console.log("leave");
                console.log("enter");
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    if(++round > 20){
                        clearInterval(interval);
                        done();
                    }
                },20);
            },
            afterLeave(el){
                console.log("afterLeave");
            },
            leaveCancelled(el){
                console.log("leaveCancelled");
            },//The methods over this comment is about animation with js on Trasition elements
            addItem(){
                //To add a number in a random position
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index){
                this.numbers.splice(index, 1);
            }
        },
        components:{
            appDangerAlert: DangerAlert,
            appSucessAlert: SucessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
        /* opacity: 1; */
    }
    .fade-leave{
        /* This to state already have as deafult value the opacity to 1 */
        /* opacity: 1; */
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter{
        opacity: 0;
        /* transform: translateY(20px); */
    }

    .slide-enter-active{
        animation: slide-in 1s ease-out forwards; 
        transition: opacity .5s;
        /* forwards this command is to the animation do not roll back */
    }

    .slide-leave{
        /* with the type property you can say each one (trasition or animation) have the priority,
         and it will decide when each part of cycle will end */
        /* transform: translateY(20px); */
    }

    .slide-leave-active{
        animation: slide-out 1s ease-out forwards; 
        transition: opacity 1s;
        opacity: 0;
        position: absolute;/* this line tell to other itens from the the <ul> 
        be animated when a item is removed */
    }

    .slide-move{
        transition: transform 1s;/* info was long the transation need to spend */
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(20px);
        }
    }
</style>
