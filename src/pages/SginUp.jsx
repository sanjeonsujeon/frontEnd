import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpContent = styled.div`
	display: inline-block;
`

const SignUp = () => {
	const [user_id, setUserIdInput] = useState("");
	const [pw, setPasswordInput] = useState("");
	const [pwcheck, setPasswordCheck] = useState("");
	const [name, setnameInput] = useState("");
	const [st_number, setstudent_numberInput] = useState("");

	const navigate = useNavigate();

	const PwCheck = () => {
		axios
			.post('localhost:8080/check', {
				PW: pw,
				PWCK: pwcheck,
			}).then((response) => {
				if ((response.status = 200)) {
					return navigate("/Login")
				}
			}).catch((error) => {

			})
	}

	const requestData = { user_id, pw, name, st_number }
	const registeraxios = () => {
		axios
			.post("http://172.22.200.51:8080/api/signup-pp", requestData)
			.then((response) => {
				if ((response.status = 200)) {
					return alert("회원가입 완료"), navigate("/Login");
				}
			}).catch((error) => {
				return alert("회원가입에 실패했습니다!");
			})
	}

	return (
		<SignUpContent>
			<div className="signup">
				<div className="signup_input">
					<label>UserID</label>
					<br />
					<input
						type="text"
						placeholder="username..."
						onChange={(e) => { setUserIdInput(e.target.value); }}
					/>
				</div>
				<div className="signup_input">
					<label>Password</label>
					<br />
					<input
						type="password"
						placeholder="password..."
						onChange={(e) => { setPasswordInput(e.target.value); }}
					/>
				</div>
				<div className="signup_input">
					<label>CheckPassword</label>
					<br />
					<input
						type="password"
						placeholder="passwordCheck"
						onChange={(e) => { setPasswordCheck(e.target.value); }}
					/>
				</div>
				<div className="signup_input">
					<label>UserName</label>
					<br />
					<input
						type="text"
						placeholder="name..."
						onChange={(e) => { setnameInput(e.target.value); }}
					/>
				</div>
				<div className="signup_input">
					<label>Student_Number</label>
					<br />
					<input
						type="number"
						placeholder="name..."
						onChange={(e) => { setstudent_numberInput(e.target.value); }}
					/>
				</div>
				<button onClick={registeraxios}>regist</button>
				<button onClick={PwCheck}>CheckPW</button>
			</div>
		</SignUpContent>
	);
};

export default SignUp;