import React from 'react'
class SetStateTest extends React.Component {
    constructor() {
        super()
        this.state = {
            val: 0
        }
    }
    // 1.多个setState默认会合并
    // componentDidMount() {
    //     this.setState({ val: this.state.val + 1 })
    //     this.setState({ val: this.state.val + 1 })
    //     this.setState({ val: this.state.val + 1 })
    //     // 页面最终展示还是1
    // }
    // 2.默认异步更新：生命周期函数、react合成事件
    // componentDidMount() {
    //     this.setState({ val: this.state.val + 1 }, () => {
    //         console.log("1.callback.val", this.state.val)
    //     })
    //     // 可以在回调里打印最新值
    //     this.setState({ val: this.state.val + 10 }, () => {
    //         console.log("2.callback.val", this.state.val)
    //     })
    //     // 页面最终展示10，但这里打印0
    //     console.log("val", this.state.val)
    //     // 以上两个setState的回调，打印的都是10。(第二个+10会覆盖掉+1，默认合并)
    //     // 可以知道所有setState的回调，都是一起执行的。这也是为了性能，不管setState了多少次，都是最后一起执行回调
    // }
    // 同步更新情况：setTimeout,setInterval,Promise,ajax, 自定义事件。总之就是非react上下文
    componentDidMount() {
        setTimeout(() => {
            this.setState({ val: this.state.val + 1 })
            console.log("setTimeout.val", this.state.val)
        })
        Promise.resolve().then(() => {
            this.setState({ val: this.state.val + 1 })
            console.log("Promise.val", this.state.val)
        })
        // 使用原生点击事件注册回调，展示的state就是最新的
        document.getElementById("div1").addEventListener("click", this.fnAdd)
    }
    // componentDidMount() { }
    // 不会合并情况：同步更新(场景同上)、传入函数
    fnAdd = () => {
        this.setState({ val: this.state.val + 1 })
        this.setState({ val: this.state.val + 1 })
        console.log("fnAdd.val", this.state.val) // 4
    }
    // 传入函数，不会合并
    fnSyncAdd = () => {
        this.setState((prev, next) => {
            return { val: prev.val + 1 }
        })
        this.setState((prev, next) => {
            return { val: prev.val + 1 }
        })
    }
    componentDidMount() {
        // this.state.val 初始值是 0

        this.setState({ val: this.state.val + 1 })
        console.log(this.state.val)

        this.setState({ val: this.state.val + 1 })
        console.log(this.state.val)

        setTimeout(() => {
            this.setState({ val: this.state.val + 1 })
            console.log(this.state.val)

            this.setState({ val: this.state.val + 1 })
            console.log(this.state.val)
        }, 0)
        // 输出：0, 0, 2, 3
    }
    // 异步更新
    render() {
        // console.log("render...", this.state.val)
        return (
            <div id='div1'>{this.state.val}</div>
            // <div id='div1' onClick={this.fnSyncAdd}>{this.state.val}</div>
            // <div id='div1' onClick={this.fnAdd}>{this.state.val}</div>
        )
    }
}

export default SetStateTest
