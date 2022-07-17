<template>
    <!-- <ref-dom /> -->
    <ref-reactive />

    <!-- <toRef /> -->
    <!-- <toRefs /> -->
</template>

<script>
import refDom from './ref-dom.vue'
import refReactive from './ref-reactive.vue'
import toRef from './toRef.vue'
import toRefs from './toRefs.vue'

export default {
    name: 'ref-index',
    components: {
        refDom,
        refReactive,
        toRef,
        toRefs
    },
    setup() {}
}
</script>