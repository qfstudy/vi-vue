<template>
    <div class="vi-button-group">
        <slot></slot>
    </div>
</template>

<script>
import Button from './button'
import Icon from '../../icon/src/icon'
export default {
    name: 'viButtonGroup', 
    components:{
        'vi-icon':Icon,
        'vi-button':Button
    }   
}
</script>

<style lang="scss" scoped>
    .vi-button-group{
        display: inline-flex;
        vertical-align: middle;
        border: 1px solid #e1e1e1;
        border-radius: 4px;
        & .vi-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: 1px;
            } 
            &:first-child{
                border-top-left-radius:3px;
                border-bottom-left-radius: 3px;
            }
            &:last-child{
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
            } 
            // &:hover{
            //     position: relative;
            //     z-index: 1;
            // }
        }
        
    }


</style>
