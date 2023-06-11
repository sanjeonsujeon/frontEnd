import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import config from "../config";

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
	const [userid, setUserIdInput] = useState("");
	const [pw, setPasswordInput] = useState("");
	const [pwcheck, setPasswordCheck] = useState("");
	const [name, setnameInput] = useState("");
	const [stnumber, setstudent_numberInput] = useState("");

	const navigate = useNavigate();

	const idCheck = () => {
		axios.post("http://localhost:8080/api/IDcheck", null, {
			params: {
				userid: userid
			}
			})
			.then((response) => {
				if ((response.status === 200)) {
					return alert("쌉가능");
				}
			})
			.catch((error) => { 
				return alert("중복된 ID 입니다.");
			});
	};

	const requestData = { userid, pw, name, stnumber };
	const registeraxios = () => {
		const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글 체크 정규식
		const specialCharRegex = /[~`!@#$%^&*()+=\-[\]\\';,./{}|":<>?_]/; // 특수문자 체크 정규식
		if (userid.trim() === "" || pw.trim() === "") {
			// 아이디가 공란인 경우
			return alert("아이디 또는 비밀번호를 입력해주세요!");
		}
		if (name.trim() === "") {
			// 아이디가 공란인 경우
			return alert("이름을 입력해주세요!");
		}
		if (stnumber.trim() === "") {
			// 아이디가 공란인 경우
			return alert("학번을 입력해주세요!");
		}
		if (
			koreanRegex.test(userid) || specialCharRegex.test(userid) ||
			koreanRegex.test(pw) || specialCharRegex.test(pw)
		) {
			// 아이디나 비밀번호에 한글이나 특수문자가 포함된 경우
			return alert("아이디 또는 비밀번호에는 한글과 특수문자를 사용할 수 없습니다!");
		}

		axios
			.post(`http://${config.serverAddress}/api/signup-pp`, requestData)
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
					type="text"
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
				<Button onClick={idCheck}>가입</Button>
			</SignUpForm>
		</SignUpContent>
	);
};

export default SignUp;