<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong Text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Highlight</p>
                <p v-highlight="'red'">Highlight</p>
                <p v-local-highlight.blink="{mainColor:'purple', secondColor:'blue', delay: '200'}">Highlight</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            localHighlight: {
                bind(el, binding, vnode){
                    var delay = 0;
                    if(binding.modifiers['delayed']){
                        delay = binding.value.delay;
                    }
                    if(binding.modifiers['blink']){
                        setTimeout(() => {
                            var mainColor = binding.value.mainColor;
                            var secondColor = binding.value.secondColor;
                            var currentColor = mainColor;
                            setInterval( () => {
                                currentColor = (currentColor == secondColor)?mainColor:secondColor;

                                if(binding.arg == 'background'){
                                    el.style.backgroundColor = currentColor;
                                }else{
                                    el.style.color = currentColor;
                                }
                            },1000);
                        }, delay);
                    }else{
                        setTimeout( () => {
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = binding.value.mainColor;
                            }else{
                                el.style.color = binding.value.mainColor;
                            }
                        },delay);
                    }
                    

                }
            }
        }
    }
</script>

<style>

</style>
