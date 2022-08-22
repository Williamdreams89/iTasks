import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLoginUserMutation } from "../Servcices/ApiSLice";
import {useNavigate} from "react-router-dom"

const AuthForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    gap: 1rem;
  }

  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthPage = () => {
  const [myusername, setMyUserName] = useState("");
  const [mypassword, setMyPassword] = useState("");

  const [
    loginUser,
    {
      data: loginData,
      isLoading: isLoadingLoginData,
      isSuccess: isLoginDataSuccess,
      isError: isLoginDataError,
      error: loginError
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await loginUser({ username: myusername, password: mypassword });
    e.target.reset();
    setMyUserName("");
    setMyPassword("");

    console.log();
  };

  useEffect(()=>{
    if(isLoginDataSuccess){
      navigate("/todolist")
    }
  }, [isLoginDataSuccess])



  return (
    <AuthForm>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={myusername}
          onChange={(e) => setMyUserName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={mypassword}
          onChange={(e) => setMyPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "fit-content" }}
        >
          Login
        </button>
      </form>
    </AuthForm>
  );
};

export default AuthPage;
