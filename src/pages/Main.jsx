import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
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

const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  margin: 20px auto;
  background-image: url(${sampleimg});
`

const Main = (props) => {
  const menus = [
    { name: "게시판", path: "/board" },
    { name: "로그인", path: "/login" },
    { name: "회원가입", path: "/signup" },
    { name: "404 페이지", path: "/*" }
  ];

  return (
    <>
      <BodyContent>
        <Banner />
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
      </BodyContent>
    </>
  );
};

export default Main;
