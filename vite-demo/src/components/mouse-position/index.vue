<template>
    <p>x: {{x}}, y: {{y}}</p>
</template>

<script setup>
import { fnMouseMove } from './move.js'
const { x, y } = fnMouseMove()
</script>