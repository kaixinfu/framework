<template>
    <button @click="fnChangeModel">btn</button>
    <child v-if="visible" />
</template>

<script>
import { ref, defineAsyncComponent } from 'vue'
// import child from './child.vue'

export default {
    name: 'teleport-index',
    components: {
        // 异步组件
        // child: () => import('./child.vue')
        child: defineAsyncComponent(() => import('./child.vue'))
    },
    data() {
        return {}
    },
    setup() {
        const visible = ref(false)
        const fnChangeModel = () => {
            visible.value = !visible.value
        }
        return {
            visible,
            fnChangeModel
        }
    }
}
</script>