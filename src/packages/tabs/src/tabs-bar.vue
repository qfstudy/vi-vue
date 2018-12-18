<template>
    <div ref="bar" class="vi-tabs-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"ViTabsBar",
    inject:['eventBus'],
    props:{
        color:{
            type:String
        }
    },
    methods:{
        setBackground(){
            // console.log(this.color)
            this.$refs.bar.style.background=`${this.color}`
        }
    },
    mounted(){
        this.setBackground()
    }
}
</script>

<style lang="scss" scoped>
    .vi-tabs-bar{
        display: flex;
        justify-content: space-around;
    }
</style>
