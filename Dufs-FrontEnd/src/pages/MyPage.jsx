import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const MyPageContent = styled.div`
	display: inline-block;
`



const MyPage = (props) => {

    const navigate = useNavigate();

    const play = () => {
        navigate('/');
    };

	return (
		<>
			<MyPageContent>
				<h3>My Page</h3>
				<Button onClick={play}>Move to Main Page</Button>
			</MyPageContent>
		</>
	);
};

export default MyPage;