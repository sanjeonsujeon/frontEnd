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
  margin-bottom: 20px;
  background-image: url(${sampleimg});
  display: flex;
  flex-direction: column;
  position: relative;
  
`

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const MainBoardContent = styled.div`
  width: 70%;
  margin: 3px;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
`

const BestContent = styled.div`
  width: 30%;
  margin: 3px;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
`

const SubBoardContent = styled.div`
  display: flex;
  width: 100%;
  margin: 3px;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
`

const SideMenuBar = styled.div`
  flex-direction: column;
  width: 15%;
  padding: 0 20px 0 0;
  height: 100%;
`

const InnerSubBoardContent = styled.div`
  width: 100%;
  margin-left:auto;
`

const SubMenu = styled.button`
  width: 100%;
  font-size: 18px;
  margin: auto;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
`

const BoardItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  height: fit-content;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Main = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBoardList = async () => {
      let response = await axios.get(`/api/board-list?pageNumber=0`);
      setData(response.data.data || []);
    };
    getBoardList();
  }, []);

  const handleMoveBoardClick = () => {
    navigate(`/dev`);
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
          <Button onClick={handleMoveBoardClick}>Dev Page</Button>
        </Inner>
      </Banner>

      <MainContent>
        <MainBoardContent>
          <SubTitle>자유게시판</SubTitle>
          {data.slice(0, 10).map(board => (
            <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
              <div>{board.title}</div>
            </BoardItem>
          ))}
        </MainBoardContent>
        <BestContent>
          <SubTitle>틀Nee 게시판</SubTitle>
          {data.slice(0, 10).map(board => (
            <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
              {board.title.length > 15 ? `${board.title.slice(0, 15)}...` : board.title}
            </BoardItem>
          ))}
        </BestContent>
      </MainContent>

      <SubContent>
        <SubBoardContent>
          <SideMenuBar>
            <SubMenu onClick={handleMoveBoardClick}>자유 게시판</SubMenu>
            <SubMenu onClick={handleMoveBoardClick}>틀니 게시판</SubMenu>
            <SubMenu onClick={handleMoveBoardClick}>정보 게시판</SubMenu>
          </SideMenuBar>
          <InnerSubBoardContent>
            {data.slice(0, 10).map(board => (
              <BoardItem key={board.id} onClick={() => handleBoardItemClick(board.id)}>
                <div>{board.title}</div>
              </BoardItem>
            ))}
          </InnerSubBoardContent>
        </SubBoardContent>
      </SubContent>
    </BodyContent>

  );
};

export default Main;
