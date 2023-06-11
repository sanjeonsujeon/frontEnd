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

const Menu = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
`

const Testdiv = styled.div`
  height: 500px;
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

const Main = () => {
  const navigate = useNavigate();
  const menus = [
    { name: "게시판", path: "/board" },
    { name: "로그인", path: "/login" },
    { name: "회원가입", path: "/signup" },
    { name: "404 페이지", path: "/*" }
  ];

  const handleCreateBoardClick = () => {
    navigate(`/board`);
  };

  return (
    <>
      <BodyContent>
        <Testdiv>
          <Banner>
            <Title>캡스톤디자인</Title>
            <Description>메인페이지는 도아가가 처리했으니 안심하라구!</Description>
            <Button onClick={handleCreateBoardClick}>게시판으로</Button>
          </Banner>
        </Testdiv>
      </BodyContent>
    </>
  );
};

export default Main;

	{/*
        <Menu>
          {menus.map((menu, index) => {
            return (
              <NavLink
                exact
                style={{ color: "Black", textDecoration: "none", margin: "10px" }}
                to={menu.path}
                key={index}
                activeStyle={{ color: "black" }}
              >
                <SidebarItem menu={menu} />
              </NavLink>
            );
          })}
        </Menu>
	*/}