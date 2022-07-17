<template>
    <div>
        <span>{{title}}</span>
        <input type="text"
               :value="title"
               @input="fnChange" />
    </div>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        fnChange(e) {
            this.$emit('update:title', e.target.value)
        }
    }
}
</script>
