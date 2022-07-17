<template>
    <div id="app">
        <!-- 基本用法 -->
        <!-- <base-comp /> -->

        <!-- 父子组件、相邻组件传值 -->
        <!-- <life-circle-emit v-if="visible" /> -->

        <!-- 高级特性 -->
        <!-- <advanced /> -->
        <!-- <button @click="fnChange">change</button> -->
        <event-demo />
    </div>
</template>

<script>
// import baseComp from './components/base'
// import lifeCircleEmit from './components/life-circle-emit'
// import advanced from './components/advanced'
import eventDemo from './components/event-demo.vue'

export default {
    name: 'App',
    components: {
        // baseComp
        // lifeCircleEmit
        // advanced,
        eventDemo
    },
    data() {
        return {
            visible: true
        }
    },
    methods: {
        fnChange() {
            this.visible = !this.visible
        }
    }
}
</script>
