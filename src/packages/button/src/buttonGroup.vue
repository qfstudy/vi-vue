<template>
    <div class="vi-button-group">
        <button>
            <slot></slot>
        </button>
        
    </div>
</template>

<script>
import Button from './button'
import Icon from '../../icon/src/icon'
export default {
    name: 'viButtonGroup', 
    components:{
        'vi-icon':Icon,
        // 'vi-button':Button
    }   
}
</script>

<style lang="scss" scoped>

</style>
