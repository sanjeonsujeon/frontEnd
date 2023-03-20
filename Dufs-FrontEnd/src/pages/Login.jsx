import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Btn = styled.div`
    display: flex;
    flex-direction: row;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
`

const Login = (props) => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/');
    };

    const signup = () => {
        navigate('/signup');
    };

	return (
		<>
			<LoginContent>
                <Form>
                    <h3>Login</h3>
                    <input type="email" placeholder="ID" />
                    <input type="password" placeholder="PW" />
                </Form>
                <Btn>
				    <Button onClick={login}>Login</Button>
				    <Button onClick={signup}>Sign Up</Button>
                </Btn>
			</LoginContent>
		</>
	);
};

export default Login;