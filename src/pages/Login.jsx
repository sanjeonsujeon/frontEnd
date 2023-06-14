import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';
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
          localStorage.removeItem('login-refresh-token');
          alert("쌉가능");
        }


      })
      .catch((Error) => {
        console.log(Error)
        alert("일치하는 회원 정보가 없습니다.");
      })
  }

  const checkToekn = (page) => {// page 는 현재 접속 하려고 하는 페이지
    const refreshToken = localStorage.getItem('login-refresh-token');
  
    axios.post(`/api/check-token`, {},{
      headers: {
        "refreshtoken" : refreshToken
      }
    })
      .then((response) => {
        if ((response.status === 200)) {
					return console.log("토큰 확인 완료"), navigate(`/${page}`);
				}
      })
      .catch((Error) => {
        console.log(Error)
        alert("다시 로그인 하여 주십시오");
        navigate("/Login");
      })
  }

  const logout = () => {
    const refreshToken = localStorage.getItem('login-refresh-token');
  
    axios.post(`/api/logout`, {},{
      headers: {
        "refreshtoken" : refreshToken
      }
    })
      .then((response) => {
        if ((response.status === 200)) {
          localStorage.removeItem('login-refresh-token'); 
          console.log(refreshToken);
					return console.log("토큰 확인 완료"), navigate("/Login");
				}
      })
      .catch((Error) => {
        console.log(Error)
        console.log("don't remove token");
        alert("오류가 발생하였습니다.");
      })
  }
/*
  const onSilentRefresh = () => {
    axios.post("http://localhost:8080/api/oauth/token",{ }, {
      headers: {
        authorization: localStorage.getItem('login-token'),
        refreshtoken: localStorage.getItem('login-refresh-token')
      } 
    })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('login-token', 'authorization');
          localStorage.setItem('login-refresh-token', 'refreshtoken');
          //console.log(localStorage);
          alert("연장완료");
          setInterval(onSilentRefresh, 60000);
        }
      })
      .catch(error => {
        alert("연장실패.");
        console.log(error);
      });
  }
  */

  const login = () => {
    navigate('/');
  };

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
        <StyledButton onClick={checkToekn}>checkToken</StyledButton>
        <StyledButton onClick={logout}>logout</StyledButton>
        <StyledButton onClick={signup}>Sign Up</StyledButton>

      </LoginContent>
    </>
  );

};

export default Login;
