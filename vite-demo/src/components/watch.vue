<template>
    <p>watch - watchEffect</p>
    <p>{{numRef}}</p>
    <p>{{name}}, {{age}}</p>
</template>

<script>
import {
    reactive,
    ref,
    toRefs,
    watch,
    watchEffect,
    getCurrentInstance
} from 'vue'
export default {
    name: 'watch-index',
    setup() {
        console.log('...', this, getCurrentInstance())
        const numRef = ref(100)
        const state = reactive({
            name: 'kk',
            age: 0
        })
        // 初始化一定会执行一次，需收集要监听的属性
        watchEffect(() => {
            console.log('watchEffect...')
        })
        // 不需要手动写要监听哪些属性
        watchEffect(() => {
            console.log('watchEffect...state.name', state.name)
        })
        watch(
            numRef,
            (newVal, oldVal) => {
                console.log('watch', newVal, oldVal)
            },
            {
                // immediate: true // 初始化之前就监听
            }
        )
        watch(
            () => state.name,
            (newVal, oldVal) => {
                console.log('watch.state', newVal, oldVal)
            },
            {
                immediate: true, // 初始化之前就监听
                deep: true
            }
        )
        setTimeout(() => {
            numRef.value = 200
            state.name = 'tt'
        }, 1500)
        setTimeout(() => {
            state.age = 10
        }, 3000)
        return {
            numRef,
            ...toRefs(state)
        }
    }
}
</script>