<template>
    <b>ref-dom demo</b>
    <p ref="elRef">ref-el-dom</p>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'ref-dom',
    setup() {
        const elRef = ref(null)
        onMounted(() => {
            console.log('onMounted', elRef.value)
        })
        return {
            elRef
        }
    }
}
</script>