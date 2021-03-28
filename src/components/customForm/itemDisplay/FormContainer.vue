<template>
    <el-form
        :label-position="formData.formStyle.labelPosition" 
        :label-width="formData.formStyle.hideLabel ? '0' : formData.formStyle.labelWidth"
        :label-suffix="formData.formStyle.labelSuffix"
        :hide-required-asterisk="!formData.formStyle.showRequiredAsterisk"
        :show-message="formData.formStyle.showVerificationMessage"
        :size="formData.formStyle.size"
        :model="formData.model"
        :rules="rules"
    >
        <slot></slot>
    </el-form>
</template>
<script>
export default {
    name: 'FormContainer',
    props:{
        formData: {
            type: Object,
            require: true
        }
    },
    data() {
        return {
            rules: {}
        }
    },
    mounted() {
        console.log('form-container',this.formData)
    }
}
</script>
