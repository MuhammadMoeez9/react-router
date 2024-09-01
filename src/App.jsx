import React from "react";
import SignUpForm from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Auth from "./components/auth";
import Home from "./components/home";
import ContactUs from "./components/ContactUs";
import Aboutus from "./components/Aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
