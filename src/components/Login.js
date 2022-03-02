import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import "../Css/login.css"
const Login = () => {
    const [check,setCheck]=useState(false)
    const initialValues = { username: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [error,setError]=useState("")
  
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        localStorage.setItem("data", JSON.stringify(formValues))
    };
    const handleCheck=(e)=>{
        setCheck(e.target.checked)
    }
    console.log(check)
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const letters = /^[A-Za-z]+$/;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        else if (!letters.test(values.username)) {
            errors.username = "Only alphabets are allowed"
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if ((values.password.length < 8 || values.password.length > 8)) {
            errors.password = "Password should be of 8 Characters";
        }
        else if (!letters.test(values.password)) {
            errors.password = "Password should contain alphabets only";
        }
        else if(check==false)
        {
            const error="Please check the box"
            setError(error)
        }

        else {
            navigate("/dashboard")
        }
        return errors;
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.username}</p>

                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.password}</p>
                    <input onChange={handleCheck} style={{float:"left",margin:10}} type="checkbox"/>
                    <p>{error}</p>
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
