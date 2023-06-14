import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginContent = styled.div`
  width: 300px;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 5px;
`

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`
const StyledButton = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: #555;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #2f2f30;
    }
`


const Login = () => {

  const navigate = useNavigate();

  const [UserID, setUserID] = useState("");
  const [Password, setPassword] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`/api/login`, {
        userid: UserID,
        pw: Password,
      })
      .then((response) => {
        console.log(response.headers);
        if ((response.status === 200)) {
          console.log(response.headers.authorization);
          const refreshtoken = response.headers.refreshtoken;
          localStorage.setItem('login-refresh-token', refreshtoken)
          console.log(refreshtoken);
          alert("쌉가능");
        }


      })
      .catch((Error) => {
        console.log(Error)
        alert("일치하는 회원 정보가 없습니다.");
      })
  }

  const signup = () => {
    navigate('/signup');
  };

  return (
    <>
      <LoginContent>
        <h2>Login</h2>
        <InputForm>
          <input
            type="text"
            placeholder="ID"
            onChange={(e) => setUserID(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputForm>
        <StyledButton onClick={onSubmit}>Login</StyledButton>
        <StyledButton onClick={signup}>Sign Up</StyledButton>

      </LoginContent>
    </>
  );

};

export default Login;