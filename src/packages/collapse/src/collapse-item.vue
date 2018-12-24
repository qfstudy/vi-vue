<template>
    <div class="vi-collapse-item">
        <div class="vi-collapse-item-title" @click="open=!open">
            {{title}}
        </div>
        <div class="vi-collapse-item-content" v-if="open">
            <slot></slot>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'ViCollapseItem',
    data(){
        return{
            open: false
        }
    },
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>
    .vi-collapse-item{
        .vi-collapse-item-title{
            border: 1px solid #ddd;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
        &:first-child{
            .vi-collapse-item-title{
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;               
            }
        }
        &:last-child{
            .vi-collapse-item-title:last-child{ 
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;              
            }
        }
        .vi-collapse-item-content{
            padding: 0px 8px;
            min-height: 30px;
            display: flex;
            align-items: center;
            &:last-child{
                border-bottom: 1px solid #ddd;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;   
            }
        }
    }
</style>
