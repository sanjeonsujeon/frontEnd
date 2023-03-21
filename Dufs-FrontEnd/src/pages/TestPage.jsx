import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SidebarItem from '../Component/SidebarItem';

const DevPageContent = styled.div`
	display: flex;
    flex-direction: column;
`
const Menu = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
`

const DevPage = (props) => {

    const menus = [
        { name: "메인 페이지", path: "/" },
        { name: "서브 페이지", path: "/sub"},
        { name: "게시판 페이지", path: "/board"},
        { name: "로그인 페이지", path: "/login"},
        { name: "회원가입 페이지", path: "/signup"},
        { name: "마이 페이지", path: "/mypage"},
        { name: "404 페이지", path: "/*"}
      ];


	return (
		<DevPageContent>
			<h1>Dev</h1>
            <Menu>
            {menus.map((menu, index) => {   
                return (
                    <NavLink
                        exact
                        style={{color: "Black", textDecoration: "none", margin: "10px"}}
                        to={menu.path} 
                        key={index}
                        activeStyle={{color: "black"}}
                    >
                        <SidebarItem menu={menu} />
                    </NavLink>
                );
            })}
            </Menu>
		</DevPageContent>
	);
};

export default DevPage;