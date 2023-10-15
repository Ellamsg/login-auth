import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Add success state
 
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  let navigate = useNavigate();

  useEffect(() => {
    // Use a setTimeout to clear error and success messages after 5 seconds
    const clearMessages = setTimeout(() => {
      setError("");
      setSuccess("");
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(clearMessages);
    };
  }, [error, success]);



 function clear(){

 setError("")


 }


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        "https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        // Login was successful, show a success message
        setSuccess("Login successful! Redirecting...");
        // Redirect to the dashboard
        navigate("Dashboard");
        // You can also redirect to the dashboard here using React Router
        // history.push('/dashboard');
      } else {
        setError("Invalid email or password");
        setSuccess(""); // Clear the success message if there's an error
      }
    } catch (err) {
      setError("Login failed!");
      setSuccess(""); // Clear the success message if there's an error
    }
  };

  return (
    <main className=" lg:px-[30px] px-[10px] ">

     
<div className="flex pt-[22px] justify-between  ">


<div className="flex items-end">
        <img src="Sigflow.png" alt="sign-flow-logo" />
      </div>

     

    </div>




      <div className="lg:flex lg:justify-center pt-[21px] ">
        <div className="login-card  relative p-[30px] flex flex-col  border-2 ">
          <div className="text-center">
            <h1 className="text-[24px] text-[#101828]">Welcome back!</h1>
            <p className="text-[14px] text-[#828282]">
              Sign in to access your account
            </p>
          </div>

          <div className="text-center   ">
            {error && (
              <div className="flex justify-center absolute top-0 left-0 bottom-0 right-0 m-auto h-[230px]">
                <div className=" rounded-[8px] box text-center px-5 py-3 b ">
                  <p className="text-3xl text-red">x</p>
                  <p>{error}</p>
                  <p className="py-2">Invalid email or password</p>
                  <button
                    onClick={clear}
                    className="bg-red rounded-[8px] my-2 text-center text-white py-2 px-4"
                  >
                    ok
                  </button>
                </div>
              </div>
            )}
            {success && <p className="text-green">{success}</p>}
          </div>

          <form className="flex flex-col ">
            <label className="py-[12px] text-[#101828]">Email</label>
            <input
              type="email"
              className="input p-3 text-[12px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="py-[12px] text-[#101828]">Password</label>
  

          
            <div className="flex input   items-center">
              <input
                className="inputs  border-y-[1px] border-y-[#D0D5DD] border-l-[#D0D5DD] border-l-[1px] rounded-l-[8px] p-3 text-[12px]"
                name=""
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
   <button  onClick={togglePasswordVisibility}>

   {showPassword ?
              <svg
                
                className="mx-2 "
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91791 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16666 10.0003 4.16666C14.2545 4.16666 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91791 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                  stroke="#667085"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                  stroke="#667085"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            :'🙈'}
              </button>
            </div>
           
            <p className="py-[12px] text-[#32D583] text-[12px]">
              forget Password?
            </p>
            <button
              type="button"
              onClick={handleLogin}
              className="mt-[32px] bg-[#32D583] btn1 text-[14px] h-[40px]  lg:w-[420px] text-white"
            >
              Sign in
            </button>
          </form>
          <div>
            <p className="py-[20px] text-center text-[#828282] text-[16px]">
              OR
            </p>

            <div className="btn2-container flex justify-center flex-col">
              <div className="flex justify-center gap-[22px]">
                <div className="flex gap-[8px] h-[40px] signin items-center justify-center">
                  <p>Sign in with Github</p>
                  <img src="git.png" alt="github" />
                </div>

                <div className="flex gap-[8px] h-[40px] signin items-center justify-center">
                  <p>Sign in with Google</p>
                  <img src="google.png" alt="github" />
                </div>
              </div>

              <div className="flex justify-center pt-[22px]">
                <div className="flex gap-[8px] h-[40px] signin  items-center justify-center">
                  <p>Sign in with SSO</p>
                  <img src="key.png" alt="github" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[12px] py-[10px]">
        Don’t have an account? <span className="text-[#12B76A]">Sign Up</span>
      </p>
    </main>
  );
};

export default Login;
