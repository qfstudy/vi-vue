<template>
    <div class="vi-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViCol',
    data(){
        return{
            gutter:0
        }
    },
    props:{
        span:{
            type:[Number]
        }
    },
    computed:{
        colClass(){
            // console.log(55)
            let{span}=this
            // console.log(span)
            return[
                span&&`vi-col-${span}`
            ]
        },
        colStyle(){
            return{
                paddingLeft:this.gutter/2 + 'px',
                paddingRight:this.gutter/2 + 'px'
            }
        }
    },
    
}
</script>

<style lang="scss" scoped>
    $class-prefix: vi-col-;
    .vi-col{
        // width: 100%;
        // display: flex;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
       
    }
</style>
