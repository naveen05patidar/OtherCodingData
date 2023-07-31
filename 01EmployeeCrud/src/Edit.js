import React, { Component } from "react";
import axios from "axios";

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            ecode: 0,
            ename: "",
            esal: 0,
            scode: 0
        }
        this.handleSCode = this.handleSCode.bind(this);
        this.handleECode = this.handleECode.bind(this);
        this.handleEName = this.handleEName.bind(this);
        this.handleESal = this.handleESal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleSCode = (evt) => {
        this.setState({ scode: evt.target.value });
    }
    handleECode = (evt) => {
        this.setState({ ecode: evt.target.value });
    }
    handleEName = (evt) => {
        this.setState({ ename: evt.target.value });
    }
    handleESal = (evt) => {
        this.setState({ esal: evt.target.value });
    }
    handleSearch = () => {
        axios.get('http://localhost:4000/emp/np')
            .then(res => {
                var found = 0;
                console.log('this.state.scode: ', this.state.scode);
                for (var i = 0; i < res.data.length; i++) {
                    if (this.state.scode == res.data[i].emp_ecode) {
                        this.setState({
                            ecode: res.data[i].emp_ecode,
                            ename: res.data[i].emp_ename,
                            esal: res.data[i].emp_esal
                        });
                        found = 1;
                    }
                }
                if (found === 0) {
                    this.setState({
                        ecode: '',
                        ename: '',
                        esal: ''
                    });
                    alert('Record not matched')
                }
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }
    handleUpdate = () => {
            var obj = {
                emp_ecode: this.state.ecode,
                emp_ename: this.state.ename,
                emp_esal: this.state.esal
            }
            axios.put('http://localhost:4000/emp/update/' + this.state.scode, obj)
                .then(res => {
                    console.log(res.data);
                })
        }
        handleClear = (evt) => {
            this.setState({
                ecode: '',
                ename: '',
                esal: ''
            });
    }
   
    render() {
        return (
            <div>
                <h1>Update Employee Details</h1>
                <table>
                    <tr>
                        <td>Enter Employee Code</td>
                        <input type="text" name="tbscode" onChange={this.handleSCode} />
                        <button name="btnscode" onClick={this.handleSearch}>Search</button>
                    </tr>
                    <tr>
                        <td> Employee Code</td>
                        <input type="text" name="tbecode" value={this.state.ecode} onChange={this.handleECode} />
                    </tr>
                    <tr>
                        <td>Employee Name</td>
                        <input type="text" name="tbename" value={this.state.ename} onChange={this.handleEName} />
                    </tr>
                    <tr>
                        <td>Employee Salary</td>
                        <input type="text" name="tbesal" value={this.state.esal} onChange={this.handleESal} />
                    </tr>
                    <tr>
                        <td>
                            <button name="btnclear" onClick={this.handleClear}>Clear</button>
                        </td>
                        <td>
                            <button name="btnupdate" onClick={this.handleUpdate}>Update</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Edit;