<template>
    <div class="vi-tabs-content" :class="setClass" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViTabsContent',
    inject:['eventBus'],
    data(){
        return{
            active: false
        }
    },
    props:{
        name:{
            type:String|Number,
            required: true
        },
    },
    computed:{
        setClass(){
            return{
                'vi-tabs-content-active':this.active
            }
        }
    },
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            // console.log(name)
            if(this.name===name){
                this.active=true
            }else{
                this.active=false
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .vi-tabs-content{
        border: 1px solid cadetblue;
        padding: 0.2em 0;
    }
    .vi-tabs-content-active{
        background: goldenrod;
    }
</style>
