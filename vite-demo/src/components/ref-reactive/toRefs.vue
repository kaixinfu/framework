<template>
    <b>toRefs demo</b>
    <p>age: {{age}}, name: {{name}}</p>
    <!-- <p>state.age: {{state.age}}, state.name: {{state.name}}</p> -->
    <!-- <p>ageRef: {{ageRef}}, nameRef: {{nameRef}}</p> -->
</template>

<script>
import { ref, toRef, toRefs, reactive } from 'vue'
export default {
    name: 'toRefs',
    components: {},
    setup() {
        const state = reactive({
            age: 10,
            name: 'kk'
        })
        // toRefs将响应式对象，转成普通对象，但又保持联系、响应性
        const cpRefs = toRefs(state)
        const { age: ageRef, name: nameRef } = cpRefs
        setTimeout(() => {
            state.age++
            state.name = 'tt'
        }, 1000)
        // return {
        //     ageRef,
        //     nameRef
        // }
        // 直接解构属性的值，不具备响应性
        // return {
        //     ...state
        // }
        // toRefs的对象，就算解构了，也具备响应性
        return { ...cpRefs }
        // return {
        //     state
        // }
    }
}
</script>