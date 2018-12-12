<template>
    <div class="vi-toast-wrapper">
        <div class="vi-toast">
            <div class="message">
                <slot></slot>
                <div></div>
            </div>
            <div class="line"></div>
            <span class="close" v-if="closeButton">
                {{closeButton.text}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'ViToast',
    props:{
        closeButton:{
            type: Object,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
