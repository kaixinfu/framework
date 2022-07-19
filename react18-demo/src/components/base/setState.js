import React from 'react'

// 1.多个setState：默认会合并、传入的是函数不会合并
class MultipleState extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
  }
  componentDidMount () {
    this.setState({ val: this.state.val + 1 })
    this.setState({ val: this.state.val + 1 })
    this.setState({ val: this.state.val + 1 })
    // 页面最终展示还是1
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

  // 直接改值
  fnAdd = () => {
    this.state.val++
    console.log('fnAdd', this.state.val)
    this.forceUpdate()
  }

  render () {
    const { val } = this.state
    return (
      <div>
        <div id='div1' onClick={this.fnSyncAdd}>{val}</div>
        <div id='div1' onClick={this.fnAdd}>{val}</div>
      </div>
    )
  }
}

// 2.默认异步更新：生命周期函数、react合成事件
class AsyncUpdate extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
  }
  componentDidMount () {
    this.setState({ val: this.state.val + 1 }, () => {
      console.log("callback.1", this.state.val)
    })
    // 可以在回调里打印最新值
    this.setState({ val: this.state.val + 10 }, () => {
      console.log("callback.2", this.state.val)
    })
    // 页面最终展示10，但这里打印0
    console.log("sync.val", this.state.val)
    // 以上两个setState的回调，打印的都是10。(第二个+10会覆盖掉+1，默认合并)
    // 可以知道所有setState的回调，都是一起执行的。这也是为了性能，不管setState了多少次，都是最后一起执行回调
  }

  fnAdd = () => {
    this.setState({ val: this.state.val + 1 })
    this.setState({ val: this.state.val + 1 })
    console.log("fnAdd.val", this.state.val) // 11
  }

  render () {
    const { val } = this.state
    return (
      <div id='div1' onClick={this.fnAdd}>{val}</div>
    )
  }
}

// 3.同步更新情况：非react上下文，定时器、Promise、ajax、自定义事件
class SyncUpdate extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
  }
  componentDidMount () {
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

  fnAdd = () => {
    this.setState({ val: this.state.val + 1 })
    this.setState({ val: this.state.val + 1 })
    console.log("fnAdd.val", this.state.val) // 4
  }

  render () {
    const { val } = this.state
    return (
      <div id='div1'>{val}</div>
    )
  }
}

// setState是微任务还是宏任务？
class QueueUpdate extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
  }
  componentDidMount () {
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
  // 既不是宏任务也不是微任务，只是同步执行，看起来像是微任务。
  // 执行完后立即调用注册的回调，所有会出现在Promise之前
  fnQueue = () => {
    console.log("start")
    setTimeout(() => {
      console.log("setTimeout");
    })
    Promise.resolve().then(() => {
      console.log("Promise.resolve")
    })
    this.setState({ val: this.state.val + 1 }, () => {
      console.log("setState.callback")
    })
    console.log("end")
  }

  // 输出：
  // start
  // end
  // setState.callback
  // Promise.resolve
  // setTimeout

  render () {
    const { val } = this.state
    return (
      <div id='div1' onClick={this.fnQueue}>{val}</div>
    )
  }
}


class SetState extends React.Component {

  render () {
    return (
      <div>
        {/* <MultipleState /> */}
        <AsyncUpdate />
        {/* <SyncUpdate /> */}
        {/* <QueueUpdate /> */}
      </div>
    )
  }
}

export default SetState