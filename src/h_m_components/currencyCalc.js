import React, { Component } from 'react'

export default class CurrencyCalc extends Component {
    state = { sum: 0 }
    inputRef = React.createRef()

    cur_ar = ["USD", "EURO", "BAT"]
    cur_sum_ar = [3.71, 3.96, 0.11]

    changeCur = (e) => {
        this.setState({ sum: this.cur_sum_ar[e.target.options ? e.target.options.selectedIndex : 0] * Number(this.inputRef.current.value) });
        this.forceUpdate()
    }

    render() {
        return (
            <div >
                <h2>Mission 5</h2>
                <h2>Please enter sum to calculate:</h2>
                <select onChange={this.changeCur} defaultValue={this.cur_ar[0]}>
                    {this.cur_ar.map((item, index) => {
                        return <option key={item} value={index}>{item}</option>
                    })}
                </select>
                <input onInput={this.changeCur} ref={this.inputRef} type="text" />
                <h2>it will cost you: {(this.state.sum).toFixed(2)} NIS</h2>
            </div>
        )
    }
}

