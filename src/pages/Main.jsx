import React from 'react';
import styled from "styled-components";

const BodyContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`

const Main = (props) => {

	return (
		<>
			<BodyContent>
				메인
			</BodyContent>
		</>
	);
};

export default Main;