import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login"
import { BrowserRouter,Routes, Route, Navigate,Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, SetUser]=useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials":true,
          
        },
      }).then(response => {
        if (response.status === 200) return response.json();
        throw new Error("Authentication Failed");
      }).then(resObject => {
        SetUser(resObject.user)
      }).catch(err => {
        console.log(err);
      })
    }
    getUser();

      
  }, [])
  console.log(user);

  return (
    <BrowserRouter>
    <div>
        <Navbar user ={user} />
        <Routes>
          <Route path="/"  exact element={<Home/>}/>
          <Route path="/login"  exact element={user? <Navigate to="/"/> :<Login/>}/>
          <Route path="/post/:id"  exact element={ user? <Post/> :<Navigate to="/login"/>}/>
     
    </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
