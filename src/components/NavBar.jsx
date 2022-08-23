import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const NaviBar = styled.nav`
    width: 100vw;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0;
    margin-bottom: .1rem;

    a{
        color: white;
    }
    
    ul{
        display: flex;
        gap: 1rem;
        align-items: center;
        height: 100%;
        padding-top: .5rem;
    }

`;

const NavBar = ({authMode}) => {
  return (
    <NaviBar className='bg-dark text-light' authMode= {authMode}>
        <h5><Link to="/">Taskmate</Link></h5>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/todolist">My Todos</Link></li>
        </ul>
    </NaviBar>
  )
}

export default NavBar