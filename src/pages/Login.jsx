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

const ButtonForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledButton = styled.button`
  width: 46%; 
  padding: 10px;
  margin: auto;
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

const Input = styled.input`
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
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
          const refreshtoken = response.headers.refreshtoken;
          localStorage.setItem('login-refresh-token', refreshtoken)
          return navigate('/');
        }
      })
      .catch((Error) => {
        if (UserID.trim() === "") {
					return alert("ID를 입력해주세요!");
				} else if (Password.trim() === "") {
					return alert("PW를 입력해주세요!");
				} else return alert("일치하는 회원 정보가 없습니다.");
			})
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit(event);
    }
  };

  const signup = () => {
    navigate('/signup');
  };

  return (
    <>
      <LoginContent>
        <h2>Login</h2>
        <InputForm>
          <Input
            type="text"
            placeholder="ID"
            onChange={(e) => setUserID(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </InputForm>
        <ButtonForm>
          <StyledButton onClick={onSubmit}>Login</StyledButton>
          <StyledButton onClick={signup}>Sign Up</StyledButton>
        </ButtonForm>
      </LoginContent>
    </>
  );

};

export default Login;
