import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const AboutUsContent = styled.div`
	display: inline-block;
`

const AboutUs = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/');
    };

	return (
		<>
			<AboutUsContent>
				<h3>About us</h3>				
				<Button onClick={play}>Move to Main Page</Button>
			</AboutUsContent>
		</>
	);
};

export default AboutUs;