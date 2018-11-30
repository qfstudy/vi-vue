<template>
    <svg class="g-icon">
        <use :xlink:href="`#vi-${name}`"></use>
    </svg> 
</template>

<script>
import '../../components/svg'
export default {
    name:'ViIcon',
    props:['name']
}
</script>

<style lang="scss" scoped>

</style>
