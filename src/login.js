import React, { useState } from "react";
function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandle(e) {
        if (user.length < 3 || password.length < 3) {
            alert(" Fill correct values")
        }
        else {
            alert("Login Successful !!")
        }

        e.preventDefault();
    }
    function userHandler(e){
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true)
        }
         else {
            setUserErr(false)
        }
        setUser(item)
    }
    function passwordHandler(e) {

        let item = e.target.value;
        if (item.length < 3) {
            setPassErr(true)
        } else {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter User Id  " onChange={userHandler} /><br/>
                {userErr ? <span> Id must contain atleast 3 alphabet ! </span> : ""}
                <br /> <br />
                <input type="email" placeholder="Enter your Email Id " required/><br/>
                <br /> <br />
                <input type="password" placeholder="Enter User Password " onChange={passwordHandler} /><br/>
                {passErr ? <span> Password must contain atleast 3 digit</span> : ""}
                <br /> <br />
                <button type="submit ">Submit</button>
            </form>
        </div>)
}
export default Login;