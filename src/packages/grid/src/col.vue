<template>
    <div class="vi-col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViCol'
}
</script>

<style lang="scss" scoped>
    .vi-col{
        width: 50%;
        // background: red;
        border: 1px solid green;
    }
</style>
