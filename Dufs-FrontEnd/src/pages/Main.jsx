import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const MainContent = styled.div`


`



const Main = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/sub');
    };

	return (
		<>
			<MainContent>
				<div>Main</div>
				<Button onClick={play}>Move to Sub Page</Button>
			</MainContent>
		</>
	);
};

export default Main;