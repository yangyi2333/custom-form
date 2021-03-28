<template>
    <div class="cf-layout--display">
        <div class="cf-layout--display--head">

        </div>
        <div class="cf-layout--display--body">
            <form-container :formData="formData" class="cf-layout--display--form">
                <draggable
                    class="cf-layout--display--draggable" 
                    v-model="formData.formDataList" 
                    group="CustomFormGroup"
                    animation="300"
                >
                    <component-match
                        v-for="item in formData.formDataList"
                        :key="item.fieldId"
                        :data="item"
                        @click.native="handleChangeItem(item)"
                    ></component-match>
                </draggable>
            </form-container>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable';
import FormContainer from './itemDisplay/FormContainer'
import ComponentMatch from './componentsList/ComponentMatch.vue';
export default {
    name: 'FormDisplay',
    components: { draggable, FormContainer, ComponentMatch },
    inject: ['formData'],
    props:{
        formData: {
            type: Object,
            require: true
        }
    },
    watch: {
        'formData.formDataList': {
            handler(val) {
                this.$emit('change', val);
            },
            deep: true
        }
    },
    mounted() {
        console.log(11,this.formData)
    },
    data() {
        return {
        }
    },
    methods: {
        handleChangeItem(data){
            this.formData.formDataList.forEach(item => {
                // if (item.name === 'Layout'){

                // }
                if (item === data) item.makeStyle.active = true;
                else item.makeStyle.active = false;
            })
            this.$emit('select-change', data)
        }
    }
}
</script>
