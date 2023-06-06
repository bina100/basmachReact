import React, { Component } from 'react'

export default class InputVal extends Component {
    state = { color: "silver" }
    colors_ar = ["red", "blue", "green", "orange"]

    changeColor = (e) => {
        this.setState({ color: e.target.value });
    }

    render() {
        return (
            <div >
                <h2>Mission 3</h2>
                <h2 style={{ background: this.state.color }}>Select your favorite color: {this.state.color}</h2>
                <select onChange={this.changeColor}>

                    {this.colors_ar.map((item) => {
                        return <option key={item} value={item}>{item}</option>
                    })}
                </select>
            </div>
        )
    }
}

