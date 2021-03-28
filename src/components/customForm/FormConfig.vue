<template>
    <div class="cf-layout--config">
        <el-tabs :stretch="true" v-model="activeName" @tab-click="handleTabChange">
            <el-tab-pane label="组件设置" name="item">
                组件设置
            </el-tab-pane>
            <el-tab-pane label="表单设置" name="form">
                表单设置
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: 'item'
        }
    },
    methods:{
        handleTabChange(){
        }
    }
}
</script>
