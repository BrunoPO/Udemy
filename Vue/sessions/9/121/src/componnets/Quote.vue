<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <span style="#ccc"><slot name="subtitle"> The Subtitle </slot></span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    //slot let to replace a part of the content even if its outter data is a html
    //if no data is passed, than the slot will render the default(info btw the tags)
    export default{

    }
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2{
        color:red 
    }
    title{
        font-style: italic;
    }
</style>
