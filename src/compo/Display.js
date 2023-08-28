import React, { useState } from "react";
import ClassCompo from "./ClassCompo";
import FuncCompo from "./FuncCompo";
import { Component } from "react"; 
import './style.css'


function DisplayCompo(){
    const[count,setCount]= useState(false)
    return(
        <div className>
            <button className='btn1' onClick={()=>setCount(!count)}>To see Styling in fnctional component</button>
       {count ?  <FuncCompo/> : ' '}  
        </div>
    )
}
export default DisplayCompo;

class Buttontwo extends Component {
    constructor() {
      super();
      this.state = {
        btnValue: true,
      };
    }
    render() {
      return (
        <div>
          <button
            className="btn2" onClick={() => this.setState({ btnValue: !this.state.btnValue })}>To see styling in Class component</button>
          {this.state.btnValue ? null : <ClassCompo />}
        </div>
      );
    }
  }
  
  export { Buttontwo };
  