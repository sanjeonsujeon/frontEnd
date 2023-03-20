import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const SginUpContent = styled.div`

`



const SignUp = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/');
    };

	return (
		<>
			<SginUpContent>
				<h3>Sign Up</h3>
				<Button onClick={play}>Move to Main Page</Button>
			</SginUpContent>
		</>
	);
};

export default SignUp;