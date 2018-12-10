<template>
    <div class="vi-row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViRow'
}
</script>

<style lang="scss" scoped>
    .vi-row{
        display: flex;
    }
</style>
