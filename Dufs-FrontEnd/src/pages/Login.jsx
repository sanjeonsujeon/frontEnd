import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Form = styled.div`
    width: 300px;
    height: 200px;
    align-items: center;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const Btn = styled.div`
    display: flex;
    flex-direction: row;
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
                <Form>
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Btn>
                        <Button onClick={login}>Login</Button>
                        <Button onClick={signup}>Sign Up</Button>
                    </Btn>
                </Form>
			</LoginContent>
		</>
	);
};

export default Login;