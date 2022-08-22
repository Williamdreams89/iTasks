import React from 'react'
import { GlobalStyles } from './assets/Styles/Global'
import Todolist from './components/Todolist'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './components/HomePage'
import TodoDetailPage from './components/TodoDetailPage'
import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage'
import AuthPage from './components/Auth'
 
function App() {
  return (
    <div>
      <NavBar />
      <GlobalStyles />
      <br/>
      
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todolist' element={<Todolist />} />
          <Route path='/todolist/:todoId' element={<TodoDetailPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/auth' element={<AuthPage />} />
        </Routes>
    </div>
  )
}

export default App