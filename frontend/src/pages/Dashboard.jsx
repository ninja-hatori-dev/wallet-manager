import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import {  Users } from "../components/Users";
import { useEffect, useState } from "react";
export const Dashboard = () =>{
    const [ balance , setBalance] = useState([]);

    useEffect(() => {
        const fetchBalance = async () => {
            
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBalance(response.data.balance); 
            
        };

        fetchBalance(); 
    }, []);
    

    return (<div> 
        
        <Appbar label={"user"}> </Appbar>
        <div>
                  <Balance label={balance}> Rs </Balance>
                  <Users></Users>
        </div>
        
      

         </div>)
};