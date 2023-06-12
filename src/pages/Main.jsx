import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import sampleimg from "../images/samplebanner.png";

const BodyContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 10px;
`

const SubTitle = styled.h1`
  margin-bottom: 20px;
`

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: 333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: white;
    background-color: #555;
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  color: white;
`

const Banner = styled.div`
  width: 100%;
  height: auto;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
  background-image: url(${sampleimg});
  display: flex;
  flex-direction: column;
  position: relative;
  
`

const BoardContent = styled.div`
  width: 50%;
  padding: 20px;
  text-align: left;
`

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const BoardItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  height: fit-content;
  background-color: #000;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`

const Main = () => {
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

  const handleMoveBoardClick = () => {
    navigate(`/board`);
  };

  const handleBoardItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <BodyContent>
      <Banner>
        <Inner>
          <Title>캡스톤디자인</Title>
          <Description>메인페이지는 도아가가 처리했으니 안심하라구!</Description>
          <Button onClick={handleMoveBoardClick}>게시판으로</Button>
        </Inner>
      </Banner>
      <MainContent>
        <BoardContent>
          <SubTitle>자유게시판</SubTitle>
          {data.map(board => (
            <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
              <div>{board.title}</div>
            </BoardItem>
          ))}
        </BoardContent>
        <BoardContent>
          <SubTitle>틀딱집합소</SubTitle>
          {data.map(board => (
            <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
              <div>{board.title}</div>
            </BoardItem>
          ))}
        </BoardContent>
      </MainContent>
    </BodyContent>
  );
};

export default Main;
