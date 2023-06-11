import axios from 'axios';
import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const LoginContent = styled.div`
    width: 300px;
    height: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`
const ButtonForm = styled.div`
    display: flex;
    flex-direction: row;
`

const OButton = styled(Button)`

`

const Login = () => {

    const navigate = useNavigate();

    const [UserID, setUserID] = useState("");
    const [Password, setPassword] = useState("");


    const onSubmit = (event) => {
      console.log("lll");
        event.preventDefault();
        axios
          .post("/api/login", {
            UserID: UserID,
            Password: Password,
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem("authorization",res.headers.authorization);
            localStorage.setItem("refreshtoken", res.headers.refershtoken);
             setInterval(onSilentRefresh, 60000);
             onSilentRefresh();
          })
          .catch((Error) => {
            console.log(Error)
            alert("일치하는 회원 정보가 없습니다.");
          })
    }

    const onSilentRefresh = () => {
        axios.post("/api/oauth/token", {
            authorization: localStorage.getItem("authorization"),
            refershtoken: localStorage.getItem("refreshtoken")
        })
            .then((response) => {
                console.log(response);
                console.log("연장됨")
                localStorage.setItem("authorization",response.headers.authorization);
                localStorage.setItem("refreshtoken",response.headers.refreshtoken);
          setInterval(onSilentRefresh, 60000);
        })
        .catch(error => {
          alert("연장실패.");
          console.log(error)
            // ... 로그인 실패 처리
            // 노력했다 알아서 추가하렴~ 오전 9시 2분 안잔지 22시간째
            });
    }
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
                <ButtonForm>
                    <OButton onClick={onSubmit}>Login</OButton>
                    <OButton onClick={signup}>Sign Up</OButton>
                </ButtonForm>
			</LoginContent>
		</>
	);
};

export default Login;