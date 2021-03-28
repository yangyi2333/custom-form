<template>     
    <div class="cf-layout--display--itemBox" 
        :class="{'cf-layout--display--active' : data.makeStyle.active}"
    >       
        <div class="cf-layout--display--itemBox--mask"></div>          
        <div class="cf-layout--display--itemBox--btn" v-show="data.makeStyle.active">
            <span class="cf-layout--display--itemBox--copy" @click="handleCopyItem">
                <i class="el-icon-document-copy"></i>
            </span>
            <span class="cf-layout--display--itemBox--del" @click="handleDeleteItem">
                <i class="el-icon-delete"></i>
            </span>
        </div>
        <el-form-item 
            :label="formData.formStyle.hideLabel || data.style.hideLabel ? '' : data.label" 
            :label-width="formData.formStyle.hideLabel || data.style.hideLabel ? '0' : ''" 
            :prop="prop" 
            :class="{'required': required && formData.formStyle.showRequiredAsterisk}"
        >
            <slot></slot>
        </el-form-item> 
    </div> 
</template>
<script>
import deepClone from '@/utils/deepClone.js'
export default {
    name: 'FormItemBox',
    inject: ['formData'],
    props: {
        data: {
            type: Object,
            required: true
        },
        isMakeForm: {
            type: Boolean,
            default: true
        },
        prop: String,
        showMask: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        required() {
            return Reflect.has(this.data, 'rules') && Reflect.has(this.data.rules, 'required');
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handleCopyItem() {
            const newItem = deepClone(this.data);
            newItem.fieldId = `${newItem.name}_${new Date().getTime()}`;
            const index = this.formData.formDataList.findIndex(item => item === this.data);
            if (index > -1) {
                this.formData.formDataList.splice(index,0,newItem);
            } 
        },
        handleDeleteItem() {
            const index = this.formData.formDataList.findIndex(item => item === this.data);
            if (index > -1) {
                this.formData.formDataList.splice(index,1);
            } 
        }
    }
}
</script>
