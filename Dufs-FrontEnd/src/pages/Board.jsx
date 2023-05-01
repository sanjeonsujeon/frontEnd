import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const SubContent = styled.div`
	display: flex;
	width: 100%;
    margin: auto;
`


const Board = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/');
    };

	return (
		<>
			<SubContent>

			</SubContent>
		</>
	);
};


export default Board;