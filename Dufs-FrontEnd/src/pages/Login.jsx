import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const LoginContent = styled.div`

`



const Login = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/');
    };

	return (
		<>
			<LoginContent>
				<h3>Login</h3>
				<Button onClick={play}>Move to Main Page</Button>
			</LoginContent>
		</>
	);
};

export default Login;