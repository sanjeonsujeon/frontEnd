import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const BoardButton = styled.button`
  display: inline-block;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`



const Dev = () => {
  const navigate = useNavigate();

  const handleBoardClick = (id) => {
    navigate(`/board/${id}`);
  };

  return (
    <Container>
      <Title>Dev Page</Title>
      <BoardButton onClick={() => handleBoardClick("1")}>자유게시판</BoardButton>
      <BoardButton onClick={() => handleBoardClick("2")}>졸업생게시판</BoardButton>
      <BoardButton onClick={() => handleBoardClick("3")}>정보게시판</BoardButton>
    </Container>
  );
};


export default Dev;
