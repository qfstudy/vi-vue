<template>
    <div class="vi-tabs-item" :class="setClass" @click="onClick">
        <span class="vi-tabs-item-icon-wrapper" v-if="iconName">
            <vi-icon class="vi-tabs-item-icon" :viIconName="iconName" :viIconSize="iconSize"></vi-icon>
        </span>
        <span class="vi-tabs-item-slot"><slot></slot></span>
    </div>
</template>

<script>
import Icon from '../../icon/src/icon'
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
        position:{
            type: String,
            validator(value){
                return['right','top'].indexOf(value)>-1
            }
        },
        iconName:{
            type: String
        },
        iconSize:{
            type: String,
        }
    },
    
    methods:{
        onClick(){
            this.eventBus.$emit('update:selected',this.name,this)
        },
    },
    computed:{
        setClass(){
            return{
                'vi-tabs-item-active': this.active,
                [`vi-tabs-item-${this.position}`]: this.position
            }
        }
    },
    created(){
        this.eventBus.$on('update:selected',(name,vm)=>{
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
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        padding: 0.5em 0.4em;
        .vi-tabs-item-icon-wrapper{
            .vi-tabs-item-icon{
                vertical-align: middle;
            }
        }
        &.vi-tabs-item-right{
            .vi-tabs-item-icon-wrapper{
                order: 2;
            }
            .vi-tabs-item-slot{
                order: 1;
            }
        }
        &.vi-tabs-item-top{
            flex-direction: column;
        }
    }
    

</style>
