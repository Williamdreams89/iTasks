import React, { useState } from "react";
import { GlobalStyles } from "./assets/Styles/Global";
import Todolist from "./components/Todolist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TodoDetailPage from "./components/TodoDetailPage";
import NavBar from "./components/NavBar";
import AboutPage from "./components/AboutPage";
import { AuthPage } from "./components/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [authMode, setAuthMode] = useState(true);
  
  return (
    <>
        <div>
          <NavBar authMode = {authMode} />
          <GlobalStyles />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todolist" element={<Todolist />} />
            <Route path="/todolist/:todoId" element={<TodoDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </div>
      
    </>
  );
}

export default App;
