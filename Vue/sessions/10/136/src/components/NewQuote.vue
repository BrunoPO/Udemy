<template>
    <form >
        <div class="col-sm8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <label >Quote</label>
            <textarea v-model="quote" rows="3" class="form-control"></textarea>
        </div>
        <div class="col-sm8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
            <button class="btn btn-primary" @click.prevent="createNew"> Add Quote </button>
        </div>
    </form>
</template>

<script>
    export default {
        data: function(){
            return {
                quote: ''
            }
        }, methods: {
            createNew(){
                this.$emit('quoteAdded',this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style>
</style>
