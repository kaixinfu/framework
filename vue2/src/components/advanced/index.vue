<template>
    <div>
        <!-- <p>vue 高级特性</p>
        <hr> -->

        <!-- 自定义 v-model -->
        <p>{{name}}</p>
        <v-model-comp v-model="name" />

        <!-- <nextTick /> -->
        <!-- <slot-demo /> -->

        <!-- 动态组件 -->
        <!-- <component :is="nextTickName" /> -->

        <!-- 异步组件 -->
        <!-- <FormDemo v-if="showFormDemo" />
        <button @click="showFormDemo = true">
            show form demo
        </button> -->

        <!-- <keep-alive-demo /> -->
        <!-- <mixin-demo /> -->
    </div>
</template>

<script>
import vModelComp from './v-model-comp'
// import nextTick from './nextTick'
// import slotDemo from './slot-demo'
// import keepAliveDemo from './keep-alive-demo'
// import mixinDemo from './mixin-demo'

export default {
    components: {
        vModelComp
        // nextTick,
        // slotDemo
        // FormDemo: () => import('../base/form-cmp')
        // keepAliveDemo
        // mixinDemo
    },
    data() {
        return {
            name: 'kaixin',
            nextTickName: 'nextTick',
            showFormDemo: false
        }
    }
}
</script>