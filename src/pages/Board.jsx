import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

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

const Board = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBoardList = async () => {
      console.log('getBoardList()');
      let response = await axios.get("/api/board-list");
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
    </Container>
  );
};

export default Board;
