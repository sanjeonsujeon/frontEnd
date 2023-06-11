import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SginUpContent = styled.div`
	display: inline-block;
`

const SignUp = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/');
    };

	return (
		<>
			<SginUpContent>

			</SginUpContent>
		</>
	);
};

export default SignUp;