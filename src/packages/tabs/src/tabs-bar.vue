<template>
    <div class="vi-tabs-nav">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"ViTabsBar"
}
</script>

<style lang="scss" scoped>
    .vi-tabs-nav{
        display: inline-flex;
        border: 1px solid red;
    }
</style>
