

const basicOption = {
    fieldId: '',
    name: '',
    label: '',
    placeholder: '请输入',
    value: '',
    /**
     * {
     *  'required': {required: true, message: '...', trigger: 'blur'},
     *  'minMax': {...}
     * }
     */
    rules: {}, 
    makeStyle: {  //制作表单的时候，页面的样式控制
      active: false
    },
    style: {},    // 组件的样式
    setting: {},  // 组件的其他属性设置，比如：rows: 2
}

const basicComponents = [
    {
        name: 'input', label: '单行文本', setting: {type: ''}
    },
    {
        name: 'textarea', label: '多行文本', setting: {rows: 2}
    },
    {

    }
]

export default basicComponents.map( item => {
    return {...basicOption,...item}
})