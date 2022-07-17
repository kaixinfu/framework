<template>
    <b>ref-reactive demo</b>
    <p>ref: {{nameRef}}</p>
    <p>state.age: {{state.age}}</p>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name: 'ref-reactive',
    setup() {
        const nameRef = ref('kaixin')
        const ageRef = ref(20)
        const state = reactive({
            age: ageRef
        })
        setTimeout(() => {
            nameRef.value = 'tt'
            // ageRef.value = 30
            state.age = 40
            console.log('ageRef.value', ageRef.value)
        }, 1000)
        return {
            nameRef,
            state
        }
    }
}
</script>