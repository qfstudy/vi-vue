<template>
    <div class="vi-tabs-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViTabsBody',
    inject:['eventBus'],
}
</script>

<style lang="scss" scoped>
    .vi-tabs-body{
        // display: flex;
        // border: 1px solid greenyellow;
    }
</style>
