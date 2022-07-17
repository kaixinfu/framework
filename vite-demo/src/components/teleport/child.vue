<template>
    <div>child</div>
    <teleport to="body">
        <div>model</div>
    </teleport>
</template>

<script>
export default {
    name: 'teleport-child'
}
</script>