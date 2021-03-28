<template>
    <div class="cf-layout--list">
        <div class="cf-layout--list--groups"
            v-for="item in formItemList" :key="item.name"
        >
            <p v-text="item.name" class="cf-layout--list--groups--name"></p>
            <draggable
                class="cf-layout--list--groups--content"
                v-model="item.list"
                :group="{ name: 'CustomFormGroup', pull: 'clone', put: false }"
                :clone="clone"
                :sort="false"
                animation="300"
            >
                <div class="cf-layout--list--groups--item" 
                    v-for="option in item.list" :key="option.name" v-text="option.label">
                    {{option.name}}
                </div>
            </draggable>
        </div>
    </div>
</template>
<script>
import formItemList from './itemList/index.js'
import draggable from 'vuedraggable';
import deepClone from '@/utils/deepClone.js'
export default {
    name:'FormItem',
    components: { draggable },
    data(){
        return{
            formItemList: formItemList
        }
    },
    mounted(){
        console.log(this.formItemList)
    },
    methods: {
        clone(obj) {
            const newObj = {
                ...deepClone(obj), 
                fieldId: `${obj.name}_${new Date().getTime()}`
            }
            return newObj
        }
    }
}
</script>
