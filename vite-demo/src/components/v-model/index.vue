<template>
    <p>{{name}}, {{age}}</p>
    <child v-model:name="name"
           v-model:age="age" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import child from './child.vue'
export default {
    components: { child },
    setup() {
        const state = reactive({ name: 'kk', age: 10 })
        return toRefs(state)
    }
}
</script>
