import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Registration() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [pass1, setPass1] = useState(null);
    const [pass2, setPass2] = useState(null);
    const [password, setPassword] = useState(null);
    const [data, setData] = useState(true);

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pass1 === pass2)  {
            setPassword(pass1)
            if(name !== null && email !==null && mobile !== null && password !==null){
            if (password === pass1) {
                const obj = {
                    name: name,
                    email: email,
                    mobile: mobile,
                    password: password
                }
                console.log(obj);

                let response = await axios.post('http://localhost:5000/userapi/userreg', obj);

                if (response.data.success == true) {
                    navigate('/Login')
                }
                else if (response.data.success == false) {
                    console.log(response.data.error);
                    setData(false);
                }

            }
            else {
                alert('password in not same ')
            }
        }
        else{
            alert('something miss you to Inter')
        }
        }
    }

    return (
        <div>
            <div>
                <div className='logo'></div>
                <div className='reg-main'>
                    <h1>Create Account</h1>
                    {
                        data == false ? <p>Invalid Credential </p> : ""
                    }
                    <form onSubmit={handleSubmit}>
                        <label>Your Name</label>
                        <input type='text' onChange={(e) => setName(e.target.value)} placeholder='First and Last name' />
                        <br></br>
                        <label> Email</label>
                        <input type='email' onChange={(e) => setEmail(e.target.value)}
                            placeholder='Inter Email' />
                        <br></br>
                        <label> Mobile Number</label>
                        <input type='number' onChange={(e) => setMobile(e.target.value)} placeholder='Inter Mobile No.' />
                        <br></br>
                        <label> Password</label>
                        <input type='password' onChange={(e) => setPass1(e.target.value)} placeholder='At least 6 character' />
                        <br></br>
                        <label>Re-inter Password</label>
                        <input type='password' onChange={(e) => setPass2(e.target.value)} />

                        <br></br>

                        <button name='submit'> Continue </button>
                    </form>
                    <br />
                    <p>Already have an Account <Link to='/Login'> Sign in</Link></p>
                </div>
                <div className='reg-footer'></div>
            </div>
        </div>
    )
}
