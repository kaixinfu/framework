import React, { Component, useState } from 'react'

class App2 extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0
        }
    }
    // fnClick() {
    //     this.setState({ a: this.state.a + 1 })
    //     this.setState({ b: this.state.b + 1 })
    // }
    fnClick() {
        setTimeout(() => {
            this.setState({ a: this.state.a + 1 })
            this.setState({ b: this.state.b + 1 })
        }, 10)
    }
    render() {
        console.log("comp.render...")
        const { a, b } = this.state;
        return (
            <>
                <span>18.0 ==== {a}{b}</span>
                <div onClick={this.fnClick.bind(this)}>click</div>
            </>
        )
    }
}

const App = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const fnClick = () => {
        setTimeout(() => {
            setA(i => i + 1)
            setB(i => i + 1)
        }, 10)
    }
    console.log("hook.render...")
    return (
        <>
            <span>18.0 ==== {a}{b}</span>
            <div onClick={fnClick}>click</div>
        </>
    )
}

export default App