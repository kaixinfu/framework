<template>
    <div id="app">
        <!-- 基本用法 -->
        <base-comp />

        <!-- 父子组件、相邻组件传值 -->
        <!-- <life-circle-emit /> -->

        <!-- 高级特性 -->
        <!-- <advanced /> -->
    </div>
</template>

<script>
import baseComp from './components/base'
// import lifeCircleEmit from './components/life-circle-emit'
// import advanced from './components/advanced'

export default {
    name: 'App',
    components: {
        baseComp
        // lifeCircleEmit
        // advanced
    }
}
</script>
