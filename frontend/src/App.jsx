import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { useState } from "react";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path = "/signup" element = { <Signup></Signup>} ></Route>
      <Route path = "/signin" element = { <Signin/>} />
      <Route path = "/dashboard" element = { <Dashboard/>} />
      <Route path = "/sendmoney" element = { <SendMoney/>} />

     </Routes>
     
     </BrowserRouter>
     
     
    </>
  )
}

export default App
