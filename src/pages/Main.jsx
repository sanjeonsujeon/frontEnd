import React from 'react';
import styled from "styled-components";
import { NavLink, useNavigate } from 'react-router-dom';
import SidebarItem from '../Component/NavItem';
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


const Banner = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin: 20px auto;
  background-image: url(${sampleimg});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  color: white;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    background-color: #2f2f30;
    z-index: -1;
  }

  &::before {
    left: -20px;
  }

  &::after {
    right: -20px;
  }
`

const Main = () => {
  const navigate = useNavigate();

  const handleMoveBoardClick = () => {
    navigate(`/board`);
  };

  return (
    <>
      <BodyContent>
          <Banner>
            <Title>캡스톤디자인</Title>
            <Description>메인페이지는 도아가가 처리했으니 안심하라구!</Description>
            <Button onClick={handleMoveBoardClick}>게시판으로</Button>
          </Banner>
      </BodyContent>
    </>
  );
};

export default Main;
