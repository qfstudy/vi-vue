<template>
    <button class="vi-button" :class="['vi-button-'+type]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ViButton',
    props:{
        type:{
            type: String,
            default:'default',
            validator (value) {
                return [
                    'default',
                    'primary',
                    'success',
                    'info',
                    'warning',
                    'danger'
                ].indexOf(value)>-1;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .vi-button{
        font-family:  Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
        color: #515a6e;
        border:1px solid none;
        outline: none;
        border: 1px solid rgb(220, 222, 226);
        border-radius: 5px;
        padding: 0.5em 0.5em;
        cursor: pointer;
        &.vi-button-primary{
            background-color: #2d8cf0;
            border-color: #2d8cf0;
            color: #fff;
        }
        &.vi-button-success{
            background-color: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
        &.vi-button-info{
            background-color: #909399;
            border-color: #909399;
            color: #fff;
        }
        &.vi-button-warning{
            color: #fff;
            background-color: #e6a23c;
            border-color: #e6a23c;
        }
        &.vi-button-danger{
            color: #fff;
            background-color: #f56c6c;
            border-color: #f56c6c;
        }
        &:hover{
            opacity: 0.8;
        }
    }
</style>
