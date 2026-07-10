import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// export const Signup=()=>{

//     let [name,setName]=useState("")
//     let [email,setEmail]=useState("")
//     let [password,setPassword]=useState("")
//     let [mobileno,setMobileno]=useState("")

//     let [nameError,setNameError]=useState("")
//     let [emailError,setEmailError]=useState("")
//     let [passwordError,setPasswordError]=useState("")
//     let [mobilenoError,setMobilenoError]=useState("")

//     let navigate=useNavigate()

//     function handleDate(){

//         let isvalid=true

//         if(name===""){
//             setNameError('Name is required')
//             isvalid=false
//         } else {
//             setNameError('')
//         }

//         if((!email.trim().includes('@')) || (!email.trim().includes('.'))){
//             setEmailError('Email is required')
//             isvalid=false
//         } else {
//             setEmailError('')
//         }

//         if(password===""){
//             setPasswordError('Password is required')
//             isvalid=false
//         } else {
//             setPasswordError('')
//         }

//         if(mobileno===""){
//             setMobilenoError('Mobile Number is required')
//             isvalid=false
//         } else {
//             setMobilenoError('')
//         }

//         if(isvalid){
//             alert('Form submitted successfully')
//             navigate('/')
//         }
//         return isvalid
//     }
//     return(
//         <>
//             <div className="container">
//                 <div className="row">
//                     <h1 className="mt-4">Signup Form</h1>
//                     <form action="">
//                         <div className="col-7">
//                             <label htmlFor="name" className="form-label">Name</label>
//                             <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
//                             <p className="text-danger">{nameError}</p>
//                         </div>
//                         <div className="col-7">
//                             <label htmlFor="email" className="form-label">Email address</label>
//                             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                             {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//                             <p className="text-danger">{emailError}</p>
//                         </div>
//                         <div className="col-7">
//                             <label htmlFor="password" className="form-label">Password</label>
//                             <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//                             <p className="text-danger">{passwordError}</p>
//                         </div>
//                         <div className="col-7">
//                             <label htmlFor="mobileno" className="form-label">Mobile Number</label>
//                             <input type="text" className="form-control" id="mobileno" value={mobileno} onChange={(e)=>setMobileno(e.target.value)}/>
//                             <p className="text-danger">{mobilenoError}</p>
//                         </div>
//                         <button type="button" className="btn btn-primary mt-3" onClick={handleDate}>Submit</button>
//                     </form>
//                 </div>
//                 <div className="card w-50 border border-3 border-primary p-5 mt-4">
//                     <h4>Name:<span>{name}</span></h4>
//                     <h4>Email:<span>{email}</span></h4>
//                     <h4>Password:<span>{password}</span></h4>
//                     <h4>Mobile Number:<span>{mobileno}</span></h4>
//                 </div>
//             </div>
//         </>
//     )
// }

export const Signup = () => {

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobileno: ""
    })

    let [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        mobilenoError: ""
    })

    let navigate = useNavigate()

    function handleChange(e) {

        let { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    let namePattern = /^[A-Z][a-z]{2,}$/
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let mobilenoPattern = /^\d{10}$/


    function handleSubmit(e) {
        e.preventDefault()

        let { name, password, email, mobileno } = formData

        let isvalid = true

        let newErrors = {
            nameError: "",
            emailError: "",
            passwordError: "",
            mobilenoError: ""
        }

        if (!namePattern.test(name)) {
            newErrors.nameError = "Name should start with a capital letter and have at least 3 characters"
            isvalid = false
        }

        if (!emailPattern.test(email)) {
            newErrors.emailError = "Invalid email format"
            isvalid = false
        }
        if (!passwordPattern.test(password)) {
            newErrors.passwordError = "Password should be at least 8 characters long and include uppercase, lowercase, number, and special character"
            isvalid = false
        }
        if (!mobilenoPattern.test(mobileno)) {
            newErrors.mobilenoError = "Mobile number should be 10 digits long"
            isvalid = false
        }

        setErrors(newErrors)
        if (isvalid) {
            // Get existing users
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if email already exists
            const existingUser = users.find(
                (user) => user.email === formData.email
            );

            if (existingUser) {
                alert("Email already registered");
                return;
            }

            // Save new user
            users.push(formData);

            localStorage.setItem("users", JSON.stringify(users));
            alert("submitted successfully")// Submit form data


            navigate('/')
        }
    }

    return (
        <>
            {/* <div className="container mt-3">
                <h1 className="mt-3">Signup Form</h1>
                <form action="">
                    <div className="col-7">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange}/>
                        <p className="text-danger">{errors.nameError}</p>
                    </div>
                    <div className="col-7">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange}  aria-describedby="emailHelp"/>
                        <p className="text-danger">{errors.emailError}</p>
                    </div>
                    <div className="col-7">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange}/>
                        <p className="text-danger">{errors.passwordError}</p>
                    </div>
                    <div className="col-7">
                        <label htmlFor="mobileno" className="form-label">Mobile Number</label>
                        <input type="tel" className="form-control" id="mobileno" name="mobileno" value={formData.mobileno} onChange={handleChange}/>
                        <p className="text-danger">{errors.mobilenoError}</p>
                    </div>
                    <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                </form>
            </div> */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 shadow p-4 rounded">

                        <h2 className="text-center mb-4">Signup</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label">Full Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                />

                                <small className="text-danger">
                                    {errors.nameError}
                                </small>
                            </div>

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

                            <div className="mb-3">
                                <label className="form-label">Mobile Number</label>

                                <input
                                    type="text"
                                    name="mobileno"
                                    className="form-control"
                                    value={formData.mobileno}
                                    onChange={handleChange}
                                />

                                <small className="text-danger">
                                    {errors.mobilenoError}
                                </small>
                            </div>

                            <button className="btn btn-success w-100">
                                Create Account
                            </button>

                            <div className="text-center mt-3">
                                Already have an account?{" "}
                                <Link to="/">Login</Link>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}