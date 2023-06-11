import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const SignUpContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const SignUpForm = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
`

const Title = styled.h2`
  margin-bottom: 20px;
`

const Input = styled.input`
  width: 280px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  text-align: left;
  color: #333;
  font-weight: bold;
`

const SignUp = () => {
	const navigate = useNavigate();
	const [userid, setUserIdInput] = useState("");
	const [pw, setPasswordInput] = useState("");
	const [pwcheck, setPasswordCheck] = useState("");
	const [name, setnameInput] = useState("");
	const [stnumber, setstudent_numberInput] = useState("");

	const idCheck = () => {
		axios.post("api/IDcheck", null, {
			params: {
				userid: userid
			}
		})
			.then((response) => {
				if ((response.status === 200)) {
					return alert("사용가능한 ID 입니다.");
				}
			})
			.catch((error) => {
				return alert("중복된 ID 입니다.");
			});
	};

	const requestData = { userid, pw, name, stnumber };

	const handlePasswordChange = (e) => {
		setPasswordInput(e.target.value);
	};

	const handlePasswordCheckChange = (e) => {
		setPasswordCheck(e.target.value);
	};

	const registeraxios = () => {
		const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
		const specialCharRegex = /[~`!@#$%^&*()+=\-[\]\\';,./{}|":<>?_]/;
		if (userid.trim() === "" || pw.trim() === "") {
			return alert("아이디 또는 비밀번호를 입력해주세요!");
		}
		if (name.trim() === "") {
			return alert("이름을 입력해주세요!");
		}
		if (stnumber.trim() === "") {
			return alert("학번을 입력해주세요!");
		}
		if (
			koreanRegex.test(userid) || specialCharRegex.test(userid) ||
			koreanRegex.test(pw) || specialCharRegex.test(pw)
		) {
			return alert("아이디 또는 비밀번호에는 한글과 특수문자를 사용할 수 없습니다!");
		}
		if (pw !== pwcheck) {
			return alert("비밀번호가 일치하지 않습니다!");
		}

		axios
			.post(`/api/signup-pp`, requestData)
			.then((response) => {
				if ((response.status = 200)) {
					alert("회원가입 완료");
					return navigate("/Login");
				}
			})
			.catch((error) => {
				alert("회원가입에 실패했습니다!");
			});
	};

	return (
		<SignUpContent>
			<SignUpForm>
				<Title>SignUp</Title>
				<Label>아이디</Label>
				<Input
					type="text"
					onChange={(e) => {setUserIdInput(e.target.value);}}
				/>
				<Button onClick={idCheck}>id 중복확인</Button>
				<Label>비밀번호</Label>
				<Input
					type="password"
					onChange={handlePasswordChange}
				/>
				<Label>비밀번호 재확인</Label>
				<Input
					type="password"
					onChange={handlePasswordCheckChange}
				/>
				<Label>이름</Label>
				<Input
					type="text"
					onChange={(e) => {setnameInput(e.target.value);}}
				/>
				<Label>학번</Label>
				<Input
					type="text"
					onChange={(e) => {setstudent_numberInput(e.target.value);}}
				/>
				<Button onClick={registeraxios}>가입완료</Button>
			</SignUpForm>
		</SignUpContent>
	);
};

export default SignUp;