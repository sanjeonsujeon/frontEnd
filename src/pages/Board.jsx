import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`
const HeadContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const Pagenum = styled.div`
  width: 600px;
  height: 100Px;
  margin: auto;
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
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`

const PageButton = styled.button`
  display: inline-block;
  margin-right: 5px;
  padding: 5px 10px;
  background-color: ${props => (props.isActive ? '#ccc' : '#f0f0f0')};
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`

const Board = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalIds, setTotalIds] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const getTotalIds = async () => {
      let response = await axios.get("/api/total-ids");
      const data = parseInt(response.headers.totalcount, 10);
      setTotalIds(data);
      console.log(totalIds);
    };
    getTotalIds();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, []);
  
  useEffect(() => {
    const getBoardList = async () => {
      let response;
      // 게시판에 따라 다른 API 호출
      ///api/board-list?boardNumber=${보드넘버}&pageNumber=${currentPage}
      response = await axios.get(`/api/board-list?pageNumber=${currentPage}`);
      setData(response.data.data || []);
    };
    getBoardList();
  }, [currentPage]);

  const handleCreateBoardClick = () => {
    navigate('/createpost');
  };

  const handleBoardItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handlePageButtonClick = async (pageNumber) => {
    setCurrentPage(pageNumber);
  
    try {
      const response = await axios.get(`/api/board-list?pageNumber=${pageNumber}`);
      setData(response.data.data || []);
    } catch (error) {
      console.log('Error occurred:', error);
    }
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
        {Array.from(Array(Math.ceil(totalIds / 10)).keys()).map((pageNumber) => (
          <PageButton
            key={pageNumber}
            isActive={pageNumber === currentPage}
            onClick={() => handlePageButtonClick(pageNumber)}
          >
            {pageNumber + 1}
          </PageButton>
        ))}
      </Pagenum>
    </Container>
  );
};

export default Board;