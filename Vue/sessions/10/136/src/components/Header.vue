<template>
    <div class="row">
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" 
                    :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
                    {{quoteCount}}/{{maxQuotes}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['quoteCount','maxQuotes']
}
</script>

