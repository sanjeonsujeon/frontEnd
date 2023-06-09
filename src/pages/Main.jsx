import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import SidebarItem from '../Component/NavItem';

const BodyContent = styled.div`
display: flex;
flex-direction: column;
`
const Menu = styled.div`
margin: auto;
display: flex;
flex-direction: row;
`

const Main = (props) => {
	const menus = [
        { name: "게시판", path: "/board"},
        { name: "로그인", path: "/login"},
        { name: "회원가입", path: "/sginup"},
        { name: "404 페이지", path: "/*"}
      ];

	return (
		<>
			<BodyContent>
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
			</BodyContent>
		</>
	);
};

export default Main;