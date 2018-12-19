<template>
    <div class="vi-tabs-item" :class="setClass" ref="line" @click="onClick">
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
        lineColor:{
            type:String
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
            default: 'small'
        }
    },
    
    methods:{
        onClick(){
            this.eventBus.$emit('update:selected',this.name)
        },
        setLine(){
            this.$refs.line.style.borderBottomColor=`${this.lineColor}`           
            // this.$refs.line.style.borderBottom=`1px solid ${this.lineColor}`          
        },
    },
    computed:{
        setClass(){
            return{
                'vi-tabs-item-active':this.active,
                [`vi-tabs-item-${this.position}`]: this.position
            }
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
        display: flex;
        align-items: center;
        padding: 0.3em 0.3em;
        // vertical-align: middle;
        .vi-tabs-item-icon-wrapper{
            // vertical-align: middle;
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
        &.vi-tabs-item-active{       
            border-bottom: 1px solid;
        }
    }
    

</style>
