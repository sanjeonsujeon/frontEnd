import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const SginUpContent = styled.div`
	display: inline-block;
`



const SignUp = () => {
    const navigate = useNavigate();
	const url = ""

	const [UserIdInput, setUserIdInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [passwodcheck, setPasswordCheck] = useState("");
	const [nameInput, setnameInput] = useState("");
	const [studnet_numberInput, setstudent_numberInput] = useState("");
	const [gender, setGender_Input] = useState("");

	const PwCheck = () => {// 확인 후 가입 진행 코딩 필요
		axios
		  .post('localhost:8080/pwcheck',{
			PW: passwordInput,
			PWCK: passwodcheck,
		  }).then((response) => {
			console.log(response);
			alert("회원가입 성공");
			if ((response.status = 200)){
				return navigate("/Login")
			}
		  }).catch((error) =>{
			//console.log(error)
            // ... 회원가입 실패 처리
            // 노력했다 알아서 추가하렴~ 오전 9시 12분 안잔지 22시간째
		  })
	}


	const registeraxios = () => {
		console.log("lll");
		axios
		  .post('localhost:8080/signup', {
			ID: UserIdInput,
			PW: passwordInput,
			NAME: nameInput,
			ST_NUMBER: studnet_numberInput,
			GENDER: gender
		  })
		  .then((response) => {
			console.log(response);
			alert("");
			if ((response.status = 200)){
				return alert("인증 완료");
			}
			console.log("lll");
		  }).catch((error) =>{
			//console.log(error)
            // ... 회원가입 실패 처리
            // 노력했다 알아서 추가하렴~ 오전 9시 12분 안잔지 22시간째
		  })
	}

    const play = () => {
		alert("회원가입 성공")
        navigate('/');
    };

	return (
		<div className="signup">
		  <div className="signup_input">
		  <label>UserID</label>
		  <br/>
		  <input
			type="text"
			placeholder="username..."
			onChange={(e) => {
				setUserIdInput(e.target.value);
			}}
		  />
		  </div>
		  <div className="signup_input">
		  <label>Password</label>
		  <br/>
		  <input
			type="password"
			placeholder="password..."
			onChange={(e) => {
				setPasswordInput(e.target.value);
			}}
			
		  />
		  </div>
		  <div className="signup_input">
		  <label>CheckPassword</label>
		  <br/>
		  <input
			type="password"
			placeholder="passwordCheck"
			onChange={(e) => {
				setPasswordCheck(e.target.value);
			}}
			
		  />
		  </div>
		  <div className="signup_input">
		  <label>UserName</label>
		  <br/>
		  <input
			type="text"
			placeholder="name..."
			onChange={(e) => {
			  setnameInput(e.target.value);
			}}
			
		  />
		   </div>
		  <div className="signup_input">
		  <label>Student_Number</label>
		  <br/>
		  <input
			type="text"
			placeholder="name..."
			onChange={(e) => {
			  setstudent_numberInput(e.target.value);
			}}
			
		  />
		  </div>
		  {/**/}<div className="signup_input">
				<label>Gender</label>
				<br />
				<input
					type="radio"
					name="gender"
					value="male"
					checked={gender === "male"}
					onChange={(e) => {
						setGender_Input(e.target.value);
					}}
				/>
				<label>Male</label>
				<br />
				<input
					type="radio"
					name="gender"
					value="female"
					checked={gender === "female"}
					onChange={(e) => {
						setGender_Input(e.target.value);
					}}
				/>
				<label>Female</label>
		  </div>
		  <button onClick={registeraxios}>regist</button>
		  <button onClick={play}>ppop</button>
		  <button onClick={PwCheck}>CheckPW</button>
				
		</div>
		
	  );
};

export default SignUp;