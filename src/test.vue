<template>
    <div class="test">
        <span>{{co}}</span>
    </div>
</template>

<script>
export default {
    name:'test',
    props:{
        co:{
            type:Number,
            default:3,
            validator(value){
                return typeof value==='number'
            }
        }
    },
    mounted(){
        console.log(55)
        console.log(typeof this.$props.co)
    }
}
</script>

<style lang="scss" scoped>

</style>
