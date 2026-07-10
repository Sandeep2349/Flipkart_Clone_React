// export const Login=()=>{
//     return(
//     <>
//         <div className="container">
//             <div className="row ">
//                 <h1 className="mt-4">Login Form</h1>
//                     <form action="">
//                         <div className=" col-7">
//                             <label htmlFor="email" className="form-label">Email address</label>
//                             <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
//                             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                         </div>
//                         <div className="col-7">
//                             <label htmlFor="password" className="form-label">Password</label>
//                             <input type="password" className="form-control" id="password"/>
//                         </div>
//                         <button type="submit" className="btn btn-primary mt-3">Submit</button>
//                     </form>
//             </div>
//         </div>
//     </>
//     )

// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        let emailError = "";
        let passwordError = "";

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email) {
            emailError = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            emailError = "Enter a valid email";
        }

        if (!formData.password) {
            passwordError = "Password is required";
        }

        setErrors({
            emailError,
            passwordError,
        });

        if (!emailError && !passwordError) {
            // Read users from localStorage
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Check credentials
            const user = users.find(
                (user) =>
                    user.email === formData.email &&
                    user.password === formData.password
            );

            if (user) {
                alert("Login Successful");
                navigate("/home");
            } else {
                alert("Invalid Email or Password");
            }
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 shadow p-4 rounded">

                    <h2 className="text-center mb-4">Login</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Email</label>

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <small className="text-danger">
                                {errors.emailError}
                            </small>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>

                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <small className="text-danger">
                                {errors.passwordError}
                            </small>
                        </div>

                        <button className="btn btn-primary w-100">
                            Login
                        </button>

                        <div className="text-center mt-3">
                            Don't have an account?{" "}
                            <Link to="/signup">Sign Up</Link>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};