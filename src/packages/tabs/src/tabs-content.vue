<template>
    <div class="vi-tabs-content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViTabsContent',
    props:{
        name:{
            type:String|Number
        },
    }
}
</script>

<style lang="scss" scoped>
    .vi-tabs-content{
        border: 1px solid cadetblue;
        padding: 0.2em 0;
    }
</style>
