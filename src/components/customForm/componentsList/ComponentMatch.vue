<template>
    <cf-item-box :data="data"
        :isMakeForm="type==='MakeForm'"
        :prop="prop" :showMask="data.name !== 'Layout'" 
        :style="{padding:data.name === 'Layout' ? '0!important' : undefined}"
    >
        <cf-input v-if="data.name === 'input'" :data="data" :model="model"></cf-input>
        <cf-textarea v-if="data.name === 'textarea'" :data="data" :model="model"></cf-textarea>
    </cf-item-box>
</template>
<script>
import AllComponents from './allComponents.js'
import CfItemBox from './FormItemBox'
export default {
    name: 'ComponentMatch',
    components: { ...AllComponents, CfItemBox },
    props: {
        data: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            default: 'MakeForm'
        },
        prop: String,
        model: Object
    },
    mounted() {
        console.log(123,this.data)
    }
}
</script>
