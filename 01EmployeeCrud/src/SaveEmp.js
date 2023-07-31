import React, { Component } from "react";
import axios from "axios";

class SaveEmp extends Component{
    constructor(){
        super();
        this.state={
            ecode:0,
            ename:"",
            esal:0
        }
        this.handleECode = this.handleECode.bind(this);
        this.handleEName = this.handleEName.bind(this);
        this.handleESal = this.handleESal.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleECode = (evt)=>{
        this.setState({ecode:evt.target.value});
    }
    handleEName = (evt)=>{
        this.setState({ename:evt.target.value});
    }
    handleESal = (evt)=>{
        this.setState({esal:evt.target.value});
    }
    handleSave = ()=>{
        var obj = {
            emp_ecode:this.state.ecode,
            emp_ename:this.state.ename,
            emp_esal:this.state.esal
            // emp_code:JSON.stringify(this.state.ecode),
            // emp_name:JSON.stringify(this.state.ename),
            // emp_sal:JSON.stringify(this.state.esal)
        }
        
        axios.post('http://localhost:4000/emp/add', obj)
        .then(res => console.log(res.data));
  

    }
    handleClear = ()=>{
        this.setState=({
            ecode:0,
            ename:"",
            esal:0
        });
    }
    render(){
        return(
            <div>
                <h1>Please Enter Employee Details</h1>
                <table>
                    <tr>
                        <td>Enter Employee Code</td>
                        <input type="text" name="tbecode" onChange={this.handleECode}/>
                    </tr>
                    <tr>
                        <td>Enter Employee Name</td>
                        <input type="text" name="tbename" onChange={this.handleEName}/>
                    </tr>
                    <tr>
                        <td>Enter Employee Salary</td>
                        <input type="text" name="tbesal" onChange={this.handleESal}/>
                    </tr>
                    <tr>
                       <td>
                        <button name="btnsave" onClick={this.handleSave}>Save</button>
                       </td>
                       <td>
                        <button  onClick={this.handleClear}>Clear</button>
                       </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default SaveEmp;

