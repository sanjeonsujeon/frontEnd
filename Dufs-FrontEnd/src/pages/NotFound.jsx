import React from 'react';
import styled from "styled-components";

const Nopage = styled.div`
	display: inline-block;
`

const NotFound = () => {
	return (
		<>
			<Nopage>
				<h3>404</h3>
				<p>페이지가 존재하지 않거나, 사용할수없는 페이지입니다.</p>
			</Nopage>
		</>
	);
};


export default NotFound;