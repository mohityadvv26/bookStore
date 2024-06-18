import React from 'react'
import Home from './components/home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './components/courses/Courses'
import Signup from './components/Signup'
import Contact from './components/contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


function App() {
  const[authUser,setAuthUser] = useAuth();
    console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
