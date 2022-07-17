<template>
    <input type="text"
           :value="name"
           @input="$emit('update:name', $event.target.value)" />
    <input type="text"
           :value="age"
           @input="$emit('update:age', $event.target.value)" />
</template>

<script>
export default {
    props: ['name', 'age']
}
</script>
