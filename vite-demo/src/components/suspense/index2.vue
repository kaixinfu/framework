<template>
    <suspense>
        <template #default>
            <child v-if="visible" />
        </template>
        <template #fallback>
            <div>
                Loading...
            </div>
        </template>
    </suspense>
</template>

<script setup>
import { ref } from 'vue'
import child from './child.vue'
console.log('setup...')
// const visible = ref(false)
// setTimeout(() => {
//     visible.value = true
// }, 1000)
const fnDelay = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })
}
const visible = ref(await fnDelay())
console.log('visible', visible)
</script>