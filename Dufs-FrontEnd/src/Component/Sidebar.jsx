import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

const Side = styled.div`
  display: flex;
  border-right: 2px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`

const Menu = styled.div`
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
`

function Sidebar() {

  const menus = [
    { name: "Main", path: "/" },
    { name: "Sub", path: "/sub"},
    { name: "404", path: "/404"}
  ];

  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {   
          return (
            <NavLink
              exact
              style={{color: "Black", textDecoration: "none"}}
              to={menu.path} 
              key={index}
              activeStyle={{color: "black"}}
            >
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;