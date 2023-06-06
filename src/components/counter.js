import { Component } from "react";

export default class Counter extends Component {
    divStyle = {
        background: "yellow",
        padding: "16px"
    }

    counter1 = 44
    state = { counter: 0, user: "koko" };
    colors_ar = ["red", "blue", "green", "orange"]

    add1 = () => {
        this.counter1++
        this.setState({ counter: this.state.counter + 1 })
        if (this.state.counter + 1 >= 15) {
            this.setState({ user: "jeck" })
        }
    }

    render() {
        return (
            <div style={{ color: this.colors_ar[this.state.counter] }}>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.add1}>Add 1 {this.state.user}</button>
            </div>
        )
    }
}