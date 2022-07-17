<template>
    <div>
        <button @click="changeState('A')">A</button>
        <button @click="changeState('B')">B</button>
        <button @click="changeState('C')">C</button>

        <keep-alive>
            <!-- tab 切换 -->
            <a-cmp v-if="state === 'A'" /> <!-- v-show -->
            <b-cmp v-if="state === 'B'" />
            <c-cmp v-if="state === 'C'" />
        </keep-alive>
    </div>
</template>

<script>
import aCmp from './a'
import bCmp from './b'
import cCmp from './c'

export default {
    components: {
        aCmp,
        bCmp,
        cCmp
    },
    data() {
        return {
            state: 'A'
        }
    },
    methods: {
        changeState(state) {
            this.state = state
        }
    },
    created() {
        console.log('keep-alive.created...')
    },
    mounted() {
        console.log('keep-alive.mounted...')
    }
}
</script>