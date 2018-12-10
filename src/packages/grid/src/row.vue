<template>
    <div class="vi-row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViRow',
    props:{
        gutter:{
            type:[Number,String]
        }
    },
    computed:{
        rowStyle(){
            let{gutter}=this
            return {
                marginLeft:-gutter/2+'px',
                marginRight:-gutter/2+'px'
            }
        },
    },
    mounted(){
        //    console.log(this.$children)
        this.$children.forEach((vm)=>{
            vm.gutter=this.gutter
            // console.log(vm.gutter)
        })
    }
}
</script>

<style lang="scss" scoped>
    .vi-row{
        display: flex;
        // width:100%;
        // height: 100%;
    }
</style>
