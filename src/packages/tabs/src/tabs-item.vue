<template>
    <div class="vi-tabs-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViTabsItem',
    props:{
        name:{
            type:String|Number
        },
    },
    methods:{},
    inject:['eventBus'],
    mounted(){
        console.log(this.name)
        this.eventBus.$on('update:selected',(value)=>{
            // console.log(22)
            console.log(value)
        })
    }
}
</script>

<style lang="scss" scoped>
    .vi-tabs-item{
        // display: flex;
        border: 1px solid yellow;
        padding: 0.1em 0.1em;
    }

</style>
