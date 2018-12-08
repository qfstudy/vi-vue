<template>
    <div class="vi-input-wrapper">
        <template>
            <input 
            class="vi-input" 
            :disabled="disabled"
            :placeholder="placeholder" 
            :class="[{'vi-input-disabled':disabled}]"
            :value="currentValue"
            @input="handleInput"
            />
        </template>
        <template>
            <span class="vi-input-icon" v-if="icon">
                <vi-icon vi-icon-name="search" vi-icon-size="small"></vi-icon>
            </span>
        </template>
    </div>
</template>

<script>
export default {
    name: 'viInput',
    data(){
        return{
            currentValue: this.value
        }
    },
    props:{
        disabled:{
            type: Boolean
        },
        placeholder:{
            type: String
        },
        value:{
            type: [String,Number]
        },
        clearable:{
            type: Boolean,
        }
    },
    methods:{
        handleInput(event){        
            let value=event.target.value
            this.currentValue=value
            // console.log(this.currentValue)
            this.$emit('input', value);            
        }
    },
    mounted(){
        // console.log(!!(this.$props.disabled))
        // console.log(this.currentValue)
    },
    updated(){
        // console.log(this.value)
    }
}
</script>

<style lang="scss" scoped>
    .vi-input-wrapper{
        display: inline-flex;
        border: 1px solid #e1e1e1;
         border-radius: 3px;
        .vi-input{
            border: 1px solid transparent;  //自定义边框
            outline: none;  
            padding: 0.6em 0.1em;
            cursor: pointer;
            &.vi-input-disabled{
                cursor: not-allowed;
            }
        }
    }
    
</style>
