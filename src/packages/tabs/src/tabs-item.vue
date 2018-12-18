<template>
    <div class="vi-tabs-item" :class="setClass" ref="line" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'ViTabsItem',
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
        line:{
            type:String
        }
    },
    
    methods:{
        onClick(){
            this.eventBus.$emit('update:selected',this.name)
        },
        setLine(){
            this.$refs.line.style.borderBottomColor=`${this.line}`
        },
    },
    computed:{
        setClass(){
            return{'vi-tabs-item-active':this.active}
        }
    },
    mounted(){
        this.setLine()
    },
    created(){
        // console.log(this.name)
        this.eventBus.$on('update:selected',(name,vm)=>{
            // console.log(vm.$refs)
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
    .vi-tabs-item{
        padding: 0.1em 0.1em;
       
    }
    .vi-tabs-item-active{
         border-bottom: 1px solid;
    }

</style>
