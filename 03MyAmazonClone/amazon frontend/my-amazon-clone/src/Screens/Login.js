import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate();

    const handleReg = () => {
        navigate('/reg')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email !== null || password !== null) {
            const obj = {
                email: email,
                password: password
            }
            let response = await axios.post('http://localhost:5000/userapi/userlogin', obj);
            if (response.data.success == true) {
                const { token } = await response.data;
               await localStorage.setItem("token",token);
                navigate('/dashboard');
            }
            else if(response.data.success == false){
                alert('please Inter Valid Email and Password')
            }
        }
        else {
            alert('please Inter Valid Email and Password');
        }
    }
    return (
        <div>
            <div>
                <div className='logo'></div>
                <div className='reg-main'>
                    <h1>Create Account</h1>
                    <form onSubmit={handleSubmit}>
                        <label> Email</label>
                        <input type='email' onChange={(e) => setEmail(e.target.value)}
                            placeholder='Inter Email' />
                        <br></br>
                        {/* <label> Mobile Number</label>
            <input type='number' onChange={(e)=>setMobile(e.target.value)} placeholder='Inter Mobile No.'/>
            <br></br> */}
                        <label> Password</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='At least 6 character' />


                        <br></br>

                        <button name='submit'> Continue </button>
                    </form>
                    <div>
                        <button name='btn-reg' onClick={handleReg}>Create your own Amazon Account</button>
                    </div>
                </div>
                <div className='reg-footer'></div>
            </div>
        </div>
    )
}
