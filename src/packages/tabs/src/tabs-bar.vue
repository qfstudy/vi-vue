<template>
    <div ref="bar" class="vi-tabs-bar" :class="setClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"ViTabsBar",
    inject:['eventBus'],
    props:{
        color:{
            type: String
        },
        space:{
            type: String,
            validator(value){
                return['end','between','around','center'].indexOf(value)>-1
            }
        }
    },
    methods:{
        setBackground(){
            this.$refs.bar.style.background=`${this.color}`
        }
    },
    computed:{
        setClass(){
            return {[`vi-tabs-bar-${this.space}`]:this.space}
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
        &.vi-tabs-bar-end{
            justify-content: flex-end;
        }
        &.vi-tabs-bar-between{
            justify-content: space-between;
        }
        &.vi-tabs-bar-around{
            justify-content: space-around;
        }
        &.vi-tabs-bar-center{
            justify-content: center;
        }
    }
</style>
