// 创建响应式
function reactive(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }
    const handler = {
        get: function (target, key, receiver) {
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                console.log("get.key...", key)
            }
            const res = Reflect.get(target, key, receiver)
            return reactive(res)
        },
        set: function (target, key, val, receiver) {
            if (val === target[key]) {
                return true
            }
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                console.log("set.key...", target, key, val)
            }
            return Reflect.set(target, key, val, receiver)
        },
        deleteProperty: function (target, key, receiver) {
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                console.log("delete.key...", key)
            }
            return Reflect.deleteProperty(target, key, receiver)
        }
    }
    return new Proxy(obj, handler)
}

// 测试数据
const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        city: 'beijing',
        a: {
            b: {
                c: {
                    d: {
                        e: 100
                    }
                }
            }
        }
    }
}

const proxyData = reactive(data)
