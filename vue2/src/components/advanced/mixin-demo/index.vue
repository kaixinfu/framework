<template>
    <div>
        <p>{{name}} {{major}} {{city}}</p>
        <button @click="showName">显示姓名</button>
        <ol>
            <li>变量来源不明确，不利于阅读</li>
            <li>多个mixin可能会发生冲突</li>
            <li>可能出现多对多关系，负责度高</li>
        </ol>
    </div>
</template>

<script>
import mixin1 from './mixin1'
import mixin2 from './mixin2'

export default {
    mixins: [mixin1, mixin2], // 可以添加多个，会自动合并起来
    data() {
        return {
            // name: 'kaixin',
            major: 'web 前端'
        }
    },
    methods: {},
    mounted() {
        // eslint-disable-next-line
        console.log('component mounted', this.name)
    }
}
</script>