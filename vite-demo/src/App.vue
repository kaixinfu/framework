<template>
    <!-- <Lifecycle /> -->
    <!-- <v-model /> -->
    <!-- <ref-reactive /> -->
    <!-- <emit /> -->
    <!-- <teleport-demo /> -->
    <!-- <suspense-demo /> -->
    <!-- <mouse-position /> -->
    <!-- <watch-demo /> -->
    <!-- <getCurrentInstanceDemo /> -->
    <event-demo />
</template>
<script>
import Lifecycle from './components/life-cycle/index.vue'
import vModel from './components/v-model/index.vue'
import refReactive from './components/ref-reactive/index.vue'
import emit from './components/emits/index.vue'
import teleportDemo from './components/teleport/index.vue'
import suspenseDemo from './components/suspense/index.vue'
import mousePosition from './components/mouse-position/index.vue'
import watchDemo from './components/watch.vue'
import getCurrentInstanceDemo from './components/getCurrentInstance.vue'
import eventDemo from './components/event-demo.vue'
export default {
    components: {
        Lifecycle,
        vModel,
        refReactive,
        emit,
        teleportDemo,
        suspenseDemo,
        mousePosition,
        watchDemo,
        getCurrentInstanceDemo,
        eventDemo
    }
}
</script>
