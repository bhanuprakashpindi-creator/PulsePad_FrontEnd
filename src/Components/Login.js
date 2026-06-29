import {useState } from "react";
import axios from "axios";
const loginImg=new URL("../../images/loginImg.jpg",import.meta.url).toString();
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";



const Login=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errorMsg,setErrorMsg]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();


    const handleLogin=async()=>{
         setErrorMsg(""); 
         if (!email || !password) {
           setErrorMsg("Email and password are required");
           return;
         }
        try{
            const res=await axios.post("https://pulsepad-backend.onrender.com",{
            email,password
        },{withCredentials:true})

        if(res.data && res.data._id)
        {
            dispatch(addUser(res.data))
            navigate("/user")
        }
        else {
        setErrorMsg("Invalid credentials"); 
         }
        }
        catch(err)
        {
            console.log(err)
        }
    }
    return(
        <div className=" min-h-screen  bg-cover flex justify-center items-center" style={{
        background: `linear-gradient(90deg, rgba(105,52,12,1) 0%, rgba(204,144,84,1) 44%, rgba(193,152,104,1) 100%)`,
        backgroundBlendMode: "overlay",
      }}>
            <div className="login-box flex shadow-2xl bg-white h-auto w-[700px] mt-25  overflow-hidden rounded-4xl mb-15">
                
                   <div className="email/pass w-1/2 p-5 flex flex-col justify-center gap-4">
                      {errorMsg && (
                            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-sm">
                                {errorMsg}
                            </div>
                       )}


                    <label className=" text-gray-700 font-semibold">Email</label>
                    <input type="email"  placeholder="Email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className=" p-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    <label className=" text-gray-700 font-semibold">Password</label>
                    <input type="password" placeholder="Password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"/>

                    <button onClick={handleLogin}
                    className="mt-4 bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-900 transition duration-300">
                       Login
                    </button>
                    
                   </div>

                <div className="imagebox w-1/2">


                    <img src={loginImg}/>


                </div>


            </div>

        </div>
    )
}

export default Login;
