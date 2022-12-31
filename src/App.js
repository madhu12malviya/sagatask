import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Registration from './Components/Registration/Registration';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Login from './Components/Login/Login';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserList from "./Components/Dashboard/UserList";
import UserProfile from "./Components/Dashboard/UserProfile";
const Registration = React.lazy(() =>
  import("./Components/Registration/Registration")
);
const Dashboard = React.lazy(() => import("./Components/Dashboard/Dashboard"));
const Login = React.lazy(() => import("./Components/Login/Login"));

function App() {

  useEffect(()=>{
    axios.get('http://localhost:3004/posts/1')
    .then((responce)=>{
      console.log(66666, responce);

    })
  },[])
  
  return (
    <div className="App">
      <ToastContainer autoclose={800} />
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Registration />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
          </Routes>
        </Suspense>

        <Routes>
          <>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="userlist" element={<UserList />} />
              <Route path="userprofile" element={<UserProfile />} />
            </Route>
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
