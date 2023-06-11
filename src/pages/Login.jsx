import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

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

const ButtonForm = styled.div`
  display: flex;
  flex-direction: row;
`

const HandleButton = styled.button`
display: inline-block;
margin-right: 10px;
padding: 10px 20px;
background-color: #f0f0f0;
color: #333;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #ccc;
}
`

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <LoginContent>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <InputForm>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </InputForm>
      <ButtonForm>
        <HandleButton onClick={handleLogin}>Login</HandleButton>
        <HandleButton onClick={handleSignup}>Sign Up</HandleButton>
      </ButtonForm>
    </LoginContent>
  );
};

export default Login;
