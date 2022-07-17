<template>
    <div>
        <!-- <p>vue 基本使用</p>
        <hr> -->

        <!-- <tpl /> -->
        <sync />
        <!-- <watch /> -->
        <!-- <computed /> -->
        <!-- <class-cmp /> -->
        <!-- <if-show /> -->
        <!-- <list /> -->
        <!-- <event /> -->
        <!-- <form-comp /> -->
    </div>
</template>

<script>
// import tpl from './tpl'
import sync from './sync'
// import watch from './watch'
// import computed from './computed'
// import classCmp from './class-cmp'
// import ifShow from './if-show'
// import list from './list'
// import event from './event'
// import formComp from './form-comp'

export default {
    components: {
        // tpl,
        sync
        // watch,
        // computed
        // classCmp,
        // ifShow
        // list,
        // event,
        // formComp
    },
    data() {
        return {
            name: 'kaixin',
            website: {
                url: 'http://baidu.com/',
                title: 'lagou',
                subTitle: '拉勾招聘'
            },
            // nextTickName: "nextTick",
            showFormDemo: false
        }
    }
}
</script>