import { useState  } from "react";
import { Bottomwarning } from "../components/Bottomwarning";
import { Button } from "../components/Button";
import { Heading } from "../components/heading";
import { Input } from "../components/Input";
import { Subheading } from "../components/subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () =>{
    
    const [ firstName , SetfirstName]  = useState("");
    const [ lastName , SetlastName]  = useState("");
    const [ email , Setemail]  = useState("");
    const [ password , Setpassword]  = useState("");
    const navigate = useNavigate();


      return (<div className="flex items-center bg-blue-100 justify-center min-h-screen"> 

       

       <div className="bd-slate-300  bg-white shadow-2xl flex justify-center ">
        <div className="flex flex-col justify-center shadow-lg p-7">
        <Heading   label ={"Sign Up"}></Heading>  
        <Subheading label = {"Enter your information to create an account"}/>
        <Input onchange ={e => {
            SetfirstName(e.target.value);
        }
          }
        label ={"First Name"} placeholder={"John"}></Input>
        
        <Input onchange ={e => {
            SetlastName(e.target.value);
        }
          } label ={"Last Name"} placeholder={"Cena"}></Input>
        <Input onchange ={e => {
            Setemail(e.target.value);
        }
          } label ={"Email"} placeholder={"johncena@gmail.com"}></Input>
        <Input onchange ={e => {
            Setpassword(e.target.value);
        }
          }label ={"Password"} placeholder={"1234567"}></Input>
        <Button onclick ={ async ()=>{
         const response =  await axios.post("http://localhost:3000/api/v1/user/signup" , {
                username : email,
                firstName,
                lastName,
                password
           });
          localStorage.setItem("token",response.data.token);
          navigate("/dashboard");
           
         }}  label ={"Sign Up"}></Button>
         <Bottomwarning label={"Already having account?"} buttontext={"Signin"} to={"/signin"}></Bottomwarning>

      
        </div>
        </div>
       
        
          </div>)
};