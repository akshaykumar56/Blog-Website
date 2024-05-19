import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.Auth);
        history("/");
        props.showAlert("Account Created Succesfully  ", "success")
    }
        else {
    props.showAlert("invalid credentials", "danger")
}
    }


const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}
return (
    <div className='my-3'>
        <h2>Create your i-Notebook Account</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Email name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Enter Name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} placeholder="Enter email" />
            </div>
            <div className="password">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" minLength={5} required />
            </div>
            <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Password" minLength={5} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
)
}

export default Signup