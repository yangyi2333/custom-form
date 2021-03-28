<template>
    <div class="cf-layout">
        <div class="cf-layout--left">
            <FormItem ></FormItem>    
        </div>
        <div class="cf-layout--center">
            <FormDisplay @change="contentChange" @select-change="contentSelectChange"></FormDisplay>
        </div>
        <div class="cf-layout--right">
            <FormConfig v-if="formData.formDataList.length && settingData" :data="settingData"></FormConfig>
        </div>
    </div>
</template>
<script>
import FormItem from './FormItem'
import FormDisplay from './FormDisplay'
import FormConfig from './FormConfig'
export default {
    components:{ FormItem, FormDisplay, FormConfig },
    provide(){
        return{
            formData: this.formData
        }
    },
    data() {
        return {
            formData: {
                formDataList: [],
                formStyle: {
                hideLabel: false,
                labelWidth: '85px',
                labelPosition: 'right',
                showRequiredAsterisk: true,
                showVerificationMessage: true,
                size: 'medium',
                labelSuffix: ':'
                },
                model: {}
            },
            settingData: null,
        }
    },
    methods: {
        contentChange(data) {
            this.formData.formDataList = data;
        },
        contentSelectChange(data) {
            this.settingData = data;
        }
    }
}
</script>
