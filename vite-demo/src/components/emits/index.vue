<template>
    <child :msg="msgRef"
           @fnSay="fnSay" />
</template>

<script>
import { ref } from 'vue'
import child from './child.vue'

export default {
    name: 'emit-index',
    components: {
        child
    },
    data() {
        return {
            msg: 'hello'
        }
    },
    setup() {
        const msgRef = ref('hello')
        const fnSay = (val) => {
            console.log('fnSay...', val)
            msgRef.value += 'aa'
        }
        return {
            msgRef,
            fnSay
        }
    }
}
</script>