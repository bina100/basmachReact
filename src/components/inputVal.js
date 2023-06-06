import React, { Component } from 'react'

export default class InputVal extends Component {
    state = { color: "silver" }
    pic = "logo.png"
    inputRef = React.createRef()

    changeColor = () => {
        console.log(this.inputRef.current.value);
        let input_val = this.inputRef.current.value
        this.setState({ color: input_val });
    }

    render() {
        return (
            <div className='p-2 ofer' style={{ background: this.state.color }}>
                <h2>Enter your favorite color: {this.state.color}</h2>
                <input onInput={this.changeColor} ref={this.inputRef} type="text" />
                <button onClick={this.changeColor}>Change color</button>
                
                <img src={"/images/" + this.pic} width="200" />
                <img src="/images/logo.png" width="200" />
            </div>
        )
    }
}

