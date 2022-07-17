<template>
    <!-- <sync-child v-bind:title="obj.title"
                v-on:update:title="obj.title = $event" /> -->
    <!-- <sync-child v-bind:title="num"
                v-on:update:title="num = $event" /> -->
    <sync-child v-bind:title.sync="obj.title" />
    <!-- <sync-child :title="num"
                @update:title="num = $event" /> -->
    <!-- <sync-child v-model:title="num" /> -->
</template>

<script>
import syncChild from './sync-child'
export default {
    components: {
        syncChild
    },
    data() {
        return {
            num: 2,
            obj: { title: 1 }
        }
    },
    watch: {
        obj: {
            handler(newVal) {
                console.log('obj', newVal.title)
            },
            deep: true
        },
        num: function (newVal) {
            console.log('title', newVal)
        }
    }
}
</script>
