<template>
    <svg class="vi-icon" :class="`vi-icon-${size}`">
        <use :xlink:href="`#vi-${name}`"></use>
    </svg> 
</template>

<script>
export default {
    name:'ViIcon',
    props:{
        name:'',
        size:{
            type: String,
            default: 'default',
            validator(value){
                return[
                    'default',
                    'small',
                    'medium',
                    'large'
                ].indexOf(value)>-1
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .vi-icon{
        &.vi-icon-small{
            width: 1.8em;
            height: 1.8em;
        }
        &.vi-icon-medium{
            width: 2.8em;
            height: 2.8em;
        }
        &.vi-icon-large{
            width: 3.8em;
            height: 3.8em;
        }
    }
</style>
