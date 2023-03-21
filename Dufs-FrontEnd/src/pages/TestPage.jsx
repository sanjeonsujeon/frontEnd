import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";

const DevPageContent = styled.div`
	display: flex;
    flex-direction: column;
`
const Btn = styled.div`
    display: flex;
    flex-direction: row;
`

const DevPage = (props) => {

    const navigate = useNavigate();

    const main = () => {navigate('/');};
    const sub = () => {navigate('/sub');};
    const login = () => {navigate('/login');};
    const signup = () => {navigate('/signup');};
    const mypage = () => {navigate('/mypage');};
    const notfound = () => {navigate('*');};

	return (
		<DevPageContent>
			<h1>Dev</h1>
            <Btn>
		    	<Button onClick={main}>메인 페이지</Button>
                <Button onClick={sub}>서브 페이지</Button>
                <Button onClick={login}>로그인 페이지</Button>
                <Button onClick={signup}>회원가입 페이지</Button>
                <Button onClick={mypage}>마이 페이지</Button>
                <Button onClick={notfound}>404 페이지</Button>
            </Btn>
		</DevPageContent>
	);
};

export default DevPage;