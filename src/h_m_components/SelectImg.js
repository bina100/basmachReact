import React, { Component } from 'react'

export default class SelectImg extends Component {
    state = { count: 0 }
    name_ar = ["cake", "car", "phone"]
    img_ar = ["cake.png", "car.png", "phone.png"]

    changeItem = (e) => {
        this.setState({ count: e.target.value });
        console.log(e.target.value)
    }

    render() {
        return (
            <div >
                <h2>Mission 4</h2>
                <h2>Select category name:</h2>
                <select onChange={this.changeItem}>
                    {this.name_ar.map((item, index) => {
                        return <option key={index} value={index}>{item}</option>
                    })}
                </select>
                <br></br>
                <img style={{ width: "50px", height: "50px" }} src={"/images/" + this.img_ar[this.state.count]} />

            </div>
        )
    }
}

