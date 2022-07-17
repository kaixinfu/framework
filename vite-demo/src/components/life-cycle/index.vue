<template>
    <Lifecycle :msg="msg"
               v-if="visible" />
    <div>
        <button @click="fnChange">+</button>
        <button @click="fnHide">-</button>
    </div>
</template>
<script setup>
import Lifecycle from './comp.vue'
</script>
<script>
export default {
    data() {
        return {
            msg: 'lifecycle',
            visible: true
        }
    },
    methods: {
        fnChange() {
            this.msg = this.msg + 1
        },
        fnHide() {
            this.visible = !this.visible
        }
    }
}
</script>

<style scoped>
header {
    line-height: 1.5;
}
</style>
