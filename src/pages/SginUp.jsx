import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpForm = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
`;

const Label = styled.label`
  margin-bottom: 5px;
  text-align: left;
  display: block;
`;

const Input = styled.input`
  width: 280px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #333;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SignUp = () => {
  const [user_id, setUserIdInput] = useState("");
  const [pw, setPasswordInput] = useState("");
  const [pwcheck, setPasswordCheck] = useState("");
  const [name, setnameInput] = useState("");
  const [st_number, setstudent_numberInput] = useState("");

  const navigate = useNavigate();

  const PwCheck = () => {
    axios
      .post("localhost:8080/check", {
        PW: pw,
        PWCK: pwcheck,
      })
      .then((response) => {
        if ((response.status = 200)) {
          return navigate("/Login");
        }
      })
      .catch((error) => {});
  };

  const requestData = { user_id, pw, name, st_number };
  const registeraxios = () => {
    axios
      .post("http://172.22.200.51:8080/api/signup-pp", requestData)
      .then((response) => {
        if ((response.status = 200)) {
          return alert("회원가입 완료"), navigate("/Login");
        }
      })
      .catch((error) => {
        return alert("회원가입에 실패했습니다!");
      });
  };

  return (
    <SignUpContent>
      <SignUpForm>
        <Title>SignUp</Title>
        <Label>아이디</Label>
        <Input
          type="id"
          onChange={(e) => {
            setUserIdInput(e.target.value);
          }}
        />
        <Label>비밀번호</Label>
        <Input
          type="password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        />
        <Label>비밀번호 재확인</Label>
        <Input
          type="password"
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
        <Label>이름</Label>
        <Input
          type="text"
          onChange={(e) => {
            setnameInput(e.target.value);
          }}
        />
        <Label>학번</Label>
        <Input
          type="text"
          onChange={(e) => {
            setstudent_numberInput(e.target.value);
          }}
        />
        <Button onClick={registeraxios}>가입완료</Button>
        <Button onClick={PwCheck}>PwCheck Button</Button>
      </SignUpForm>
    </SignUpContent>
  );
};

export default SignUp;
