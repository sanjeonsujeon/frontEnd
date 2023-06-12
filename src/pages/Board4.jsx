import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { Pagination } from "@mui/material";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const BoardItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  height: fit-content;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
`

const BoardTitle = styled.h3`
  margin-bottom: 5px;
  text-align: left;
`

const CreateButton = styled.button`
display: inline-block;
margin-right: 10px;
padding: 10px 20px;
background-color: #f0f0f0;
color: #333;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #ccc;
}
`
const Pagenum = styled.div`
  width: 500px;
  height: 100Px;
  margin: auto;
`

const Board = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBoardList = async () => {
      console.log('getBoardList()');
      let response = await axios.get("/api/board-list4");
      console.log('main/response: ', response);
      setData(response.data.data || []);
    };
    getBoardList();
  }, []);

  const handleCreateBoardClick = () => {
    navigate('/createpost');
  };

  const handleBoardItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const HandleFirstBoardClick = () =>{
    navigate(`/board`);
  }

  const handleSecondBoardClick = () =>{
    navigate(`/board2`);
  }

  const handleThirdBoardClick = () =>{
    navigate(`/board3`);
  }

  const handleFourthBoardClick = () =>{
    navigate(`/board4`);
  }

  const handleFifthBoardClick = () =>{
    navigate(`/board5`);
  }

  return (
    <Container>
      <HeadContainer>
        <Title>게시판</Title>
        <CreateButton onClick={handleCreateBoardClick}>글쓰기</CreateButton>
      </HeadContainer>
      {data.map(board => (
        <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
          <BoardTitle>{board.title}</BoardTitle>
        </BoardItem>
      ))}
      <Pagenum>
        {/* 이곳에 게시판 페이지 번호 들어갑니다.*/}
        <CreateButton onClick={HandleFirstBoardClick}>1</CreateButton>
        <CreateButton onClick={handleSecondBoardClick}>2</CreateButton>
        <CreateButton onClick={handleThirdBoardClick}>3</CreateButton>
        <CreateButton onClick={handleFourthBoardClick}>4</CreateButton>
        <CreateButton onClick={handleFifthBoardClick}>5</CreateButton>
      </Pagenum>
    </Container>
  );
};

export default Board;
