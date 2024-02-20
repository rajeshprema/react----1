import Dashboard from "./Components/Dashboard"
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Register from "./Components/Register";
import Login from "./Components/Login"
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';

function App() {
const [users, setUser] = useState([
  {
    id: 1,
    name: "Rajesh",
    city: "Chennai",
  },
  {
    id: 2,
    name: "John",
    city: "Bangalore",
  },
  {
    id: 3,
    name: "Karthik",
    city: "Mumbai",
  },
]);

const [userDetails, setUserDetails] = useState({
  name: "Rajesh",
  email: "rajeshraj@gmail.com",
  password: "Welcome123",
  mobileNumber: "55435654353",
  address: "Chennai",
});




  return (
    <div className="App">
      <Header/>
      <Routes>
         
        <Route path="/dashboard" element={<Dashboard users={users} />} />
        <Route path="/profile" element={<Profile users={users}/>} />

        <Route path="/login" element={<Login userDetails={userDetails}/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
