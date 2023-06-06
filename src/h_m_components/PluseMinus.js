import React, { Component } from "react"
export default class PluseMinus extends Component {


    divStyle = {
        background: "yellow",
        padding: "16px"
    }

    counter = 0
  

    pluse = () => {
        this.counter++
        if (this.state.counter + 1 >= 5) {
            this.counter = 0
        }
    }
    minus = () =>{
        this.counter--
        if (this.state.counter - 1 <= 0) {
            this.counter = 0
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