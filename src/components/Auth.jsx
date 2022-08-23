import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  useLoginUserMutation,
  useCreateUserMutation,
} from "../Servcices/ApiSLice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {} from "react-icons/fc";

const AuthStyle = styled.div`
  width: 100vw;
  overflow-y: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgb(228, 11, 83), rgb(107, 4, 76), black);

  .main__stuff {
    background: black;
    width: 70%;
    height: 80%;
    padding-left: 10px;
    padding-top: 10px;

    @media screen and (max-width: 500px) {
      width: 90%;
      font-size: 12px;
    }

    @media screen and (min-width: 501px) and (max-width: 760px) {
      width: 80%;
      font-size: 15px;
    }

    @media screen and (min-width: 761px) {
      width: 40%;
      font-size: 18px;
    }

    .headerer {
      width: 100%;
      margin: auto;

      h2 {
        width: 60%;
        margin: 0 auto;
        text-align: center;
      }

      form {
        width: 95%;
        padding: 0 calc(10% - 1.5rem);

        .field_wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          height: 2.5rem;
          padding: 0;
          border-bottom: 2px solid grey;
          margin-bottom: 0.3rem;
          gap: 5px;
          border-image: linear-gradient(to right, black, lightgray, blue, red) 2;

          & input {
            color: white;
            flex: 4;
            outline: none;
            border: none;
            background: black;

            ::-webkit-input-placeholder::before {
              color: grey;
              font-style: italic;
              opacity: 0.3;
            }

            :-ms-input-placeholder {
              color: grey;
              font-style: italic;
              opacity: 0.3;
            }

            ::placeholder {
              color: grey;
              font-style: italic;
              opacity: 0.3;
            }

            ::value {
              color: green;
            }
          }

          & label {
            flex: 1.2;
          }

          &:nth-of-type(5) {
            label {
              flex: 1.5;
            }
          }
        }
        .btn {
          font-weight: bold;
          border: 1.3px solid;
          transition: 0.3s ease-in;
          margin: 1rem auto;

          &:hover {
            background: white;
            color: black;
            font-weight: bolder;
          }
        }
      }
    }
  }
`;

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const AuthPage = () => {
  // GENERAL AUTH STUFFS
  const [showRegister, setShowRegister] = useState(false);
  const [firstNameEntry, setFirstNameEntry] = useState("");
  const [lastNameEntry, setLastNameEntry] = useState("");
  const [usernameEntry, setUsernameEntry] = useState("");
  const [emailEntry, setEmailEntry] = useState("");
  const [passwordEntry, setPasswordEntry] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordReg, setShowPasswordReg] = useState(false);

  // END OF GENERAL STUFFS

  // LOGIN MUTATION STUFFS

  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isLoading: isLoginLoading,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (usernameEntry && passwordEntry) {
      await loginUser({ username: usernameEntry, password: passwordEntry });
      setPasswordEntry("");
      setUsernameEntry("");
    } else {
      toast.error("All fields must be completed");
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      navigate("/todolist");
      toast.success("Login Successful");
    }
  }, [isLoginSuccess]);

  // ENDS OF LOGIN MUTATION STUFFS

  // USER REGISTRATION STUFFS

  const [createUser, { data, isLoading, isError, isSuccess, error }] =
    useCreateUserMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      usernameEntry &&
      firstNameEntry &&
      lastNameEntry &&
      emailEntry &&
      passwordEntry
    ) {
      createUser({username: usernameEntry, email: emailEntry, password: passwordEntry})

      setUsernameEntry("")
      setFirstNameEntry("")
      setLastNameEntry("")
      setEmailEntry("")
      setPasswordEntry("")

    } else {
      toast.error("All fields must be completed");
    }
  };

  useEffect(()=>{
    if(isSuccess){
      setShowRegister(false)
      toast.success("User Created, Login to start")
    }
  }, [isSuccess])

  return (
    <AuthStyle>
      <div className="main__stuff">
        <div className="headerer  text-light">
          {!showRegister ? (
            <>
              <h2>
                Login <hr />
              </h2>
              <form onSubmit={handleLogin} className="mt-5  text-light">
                <div className="field_wrapper">
                  <label htmlFor="">Username </label>
                  <input
                    type="text"
                    value={usernameEntry}
                    onChange={(e) => setUsernameEntry(e.target.value)}
                    name="email"
                  />
                </div>
                <br />
                <div className="field_wrapper">
                  <label htmlFor="" style={{ paddingRight: "15px" }}>
                    Password{" "}
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passwordEntry}
                    onChange={(e) => setPasswordEntry(e.target.value)}
                    name="password"
                  />
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                    id=""
                  />
                </div>
                <button type="submit" className="btn ">
                  LOGIN
                </button>

                <p>
                  You don't have account ?{" "}
                  <span
                    onClick={() => setShowRegister(true)}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "blue",
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              </form>
            </>
          ) : (
            <>
              <h2 style={{ padding: "0" }}>
                Register <hr />
              </h2>
              <form onSubmit={handleRegister} className="mt-5 pb-3">
                <div className="field_wrapper">
                  <label htmlFor="">Username </label>
                  <input
                    type="text"
                    value={usernameEntry}
                    onChange={(e) => setUsernameEntry(e.target.value)}
                    name="firstName"
                  />
                </div>
                <div className="field_wrapper">
                  <label htmlFor="">First Name </label>
                  <input
                    type="text"
                    value={firstNameEntry}
                    onChange={(e) => setFirstNameEntry(e.target.value)}
                    name="firstName"
                  />
                </div>
                <div className="field_wrapper">
                  <label htmlFor="">Last Name </label>
                  <input
                    type="text"
                    value={lastNameEntry}
                    onChange={(e) => setLastNameEntry(e.target.value)}
                    name="lastName"
                  />
                </div>
                <div className="field_wrapper">
                  <label htmlFor="">Email </label>
                  <input
                    type="email"
                    value={emailEntry}
                    onChange={(e) => setEmailEntry(e.target.value)}
                    name="email"
                  />
                </div>
                <div className="field_wrapper">
                  <label htmlFor="" style={{paddingRight: "20px"}}>Password </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passwordEntry}
                    onChange={(e) => setPasswordEntry(e.target.value)}
                    name="password"
                  />
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                    id=""
                  />
                </div>
                <button type="submit" className="btn ">
                  REGISTER
                </button>
                <p>
                  Already have an account ?{" "}
                  <span
                    onClick={() => setShowRegister(false)}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "blue",
                    }}
                  >
                    Sign In
                  </span>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </AuthStyle>
  );
};
