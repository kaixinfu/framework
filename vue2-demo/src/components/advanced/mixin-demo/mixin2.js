export default {
    data() {
        return {
            city: '北京',
            name: "ziyou",
            major: "java"
        }
    },
    methods: {
        showName(name) {
            // eslint-disable-next-line
            console.log("mixin2.showName", name, this.name)
        }
    },
    mounted() {
        // eslint-disable-next-line
        console.log('mixin2 mounted', this.name)
    }
}
