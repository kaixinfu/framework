export default {
    data() {
        return {
            city: '北京',
            name: "filiping",
            major: "java"
        }
    },
    methods: {
        showName() {
            // eslint-disable-next-line
            console.log(this.name)
        }
    },
    mounted() {
        // eslint-disable-next-line
        console.log('mixin1 mounted', this.name)
    }
}
