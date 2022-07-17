<template>
    <p>{{msg}}</p>
</template>

<script>
export default {
    name: 'emit-child',
    props: ['msg'],
    setup(props, { emit }) {
        emit('fnSay', 'child')
    }
}
</script>