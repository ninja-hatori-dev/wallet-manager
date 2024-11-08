import { useState } from "react";
import { Bottomwarning } from "../components/Bottomwarning";
import { Button } from "../components/Button";
import { Heading } from "../components/heading";
import { Input } from "../components/Input";
import { Subheading } from "../components/subheading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = () =>{
    const [ username , setusername] = useState("");
    const [ password , setpassword] = useState("");
    const navigate = useNavigate();

    return (<div className="h-screen  bg-blue-100 flex items-center justify-center" >  
       
       <div className="bd-slate-300 flex-col ">
        <div className="flex flex-col bg-white justify-center shadow-lg p-7">
        <Heading   label ={"Sign In"}></Heading>  
        <Subheading label = {"Enter your credentials to sign in"}/>
        <Input onchange={(e)=>{
            setusername(e.target.value);
        }} label ={"Email"} placeholder={"Johncena@gmail.com"}></Input>
       
     
        <Input onchange={(e)=>{
            setpassword(e.target.value);
        }} label ={"Password"} placeholder={"1234567"}></Input>
        <Button onclick={async ()=>{
 const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                username,
                password
            } 
            )
             
            localStorage.setItem("token",response.data.token);

            if( response.status === 200) navigate("/dashboard");


        }} label ={"Sign In"}></Button>
         <Bottomwarning label={"Don't have account ?"} buttontext={"Signup"} to={"/signup"}></Bottomwarning>
         </div>
         </div>
    </div> 
        
    )
};