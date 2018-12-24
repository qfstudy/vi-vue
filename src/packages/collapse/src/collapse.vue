<template>
    <div class="vi-collapse">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ViCollapse'
}
</script>

<style lang="scss" scoped>
    .vi-collapse{
        border: 1px solid #ddd;
        border-radius: 4px;
        border-bottom: 0;
    }
</style>
