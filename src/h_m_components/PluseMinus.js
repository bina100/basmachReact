import React, { Component } from "react"
export default class PluseMinus extends Component {


    counter = 0

    pluse = () => {
        if (this.counter+1 > 5) {
             this.couter =0
        }
        else{
            this.counter++
        

        }
        this.forceUpdate()
        console.log(this.counter)
    }
    minus = () =>{
        if (this.counter-1 < 0) {
            this.counter = 0
        }else{
            this.counter--
        }
        this.forceUpdate()
        console.log(this.counter)
    }

    render() {
        return (
            <div>
                <h2>Mission 1</h2>
                <h2>Counter: {this.counter}</h2>
                <button onClick={this.pluse}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}