export default function deepClone (obj = {}) {
    if(typeof obj !== 'object' || obj == null) {
        //obj是null，或者不是对象和数组，直接返回
        return obj
    }
    //初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        //保证key不是原型的属性
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    return result
}