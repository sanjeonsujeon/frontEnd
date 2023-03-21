import React from 'react';
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

const Login = (props) => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/');
    };

    const signup = () => {
        navigate('/sginup');
    };

	return (
		<>
			<LoginContent>
                <h2>Login</h2>
                <InputForm>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </InputForm>
                <ButtonForm>
                    <OButton onClick={login}>Login</OButton>
                    <OButton onClick={signup}>Sign Up</OButton>
                </ButtonForm>
			</LoginContent>
		</>
	);
};

export default Login;