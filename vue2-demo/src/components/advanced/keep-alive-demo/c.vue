<template>
    <p>state C</p>
</template>

<script>
export default {
    mounted() {
        // eslint-disable-next-line
        console.log('C mounted')
    },
    destroyed() {
        // eslint-disable-next-line
        console.log('C destroyed')
    },
    activated() {
        console.log('C activated...')
    },
    deactivated() {
        console.log('C deactivated...')
    }
}
</script>