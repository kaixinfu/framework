<template>
    <b>toRef demo</b>
    <p>ageRef: {{ageRef}}, state.age: {{state.age}}, state.name: {{state.name}}</p>
</template>

<script>
import { ref, toRef, reactive } from 'vue'
export default {
    name: 'toRef-demo',
    components: {},
    setup() {
        const state = reactive({
            age: 10,
            name: 'kk'
        })
        // 普通对象，toRef不具备响应式
        // const state = {
        //     age: 0,
        //     name: 'tt'
        // }
        // toRef：将响应式对象的单个属性，取出来保持联系、保持响应性
        const ageRef = toRef(state, 'age')
        setTimeout(() => {
            state.age++
        }, 1000)
        setTimeout(() => {
            ageRef.value++
        }, 2000)
        setTimeout(() => {
            state.name = 'ff'
        }, 2000)
        return {
            state,
            ageRef
        }
    }
}
</script>