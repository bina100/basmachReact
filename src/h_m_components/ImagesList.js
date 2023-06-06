import React, { Component } from "react"
export default class ImagesList extends Component {


    count = 0
    img_ar = ["b1.png", "b2.png", "b3.png", "b4.png"]

    next = () => {
        if (this.count+1 > 3) {
             this.count =0
        }
        else{
            this.count++
        

        }
        this.forceUpdate()
        console.log(this.count)
    }
    back = () =>{
        if (this.count-1 < 0) {
            this.count = 3
        }else{
            this.count--
        }
        this.forceUpdate()
        console.log(this.count)
    }

    render() {
        return (
            <div>
                <h2>Mission 2</h2>
                <img style={{width:"50px", height:"50px"}} src={"/images/" + this.img_ar[this.count]}/>
                <br></br>
                <button onClick={this.back}>+</button>
                <button onClick={this.next}>-</button>
            </div>
        )
    }
}