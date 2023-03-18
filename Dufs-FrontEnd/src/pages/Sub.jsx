import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const SubContent = styled.div`
	display: inline-block;
	flex-direction: row;
`

const Sub = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/');
    };

	return (
		<>
			<SubContent>
				<h3>Sub Page</h3>
				<Button onClick={play}>Move to Main Page</Button>
			</SubContent>
		</>
	);
};


export default Sub;