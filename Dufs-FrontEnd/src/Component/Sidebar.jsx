import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./NavItem";
import config from "../config"

const Side = styled.div`
  display: flex;
  border-left: 2px solid #e0e0e0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: auto;
  min-height: calc(100vh - ${config.HeaderHeight});
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0 30px 0;
`

function Sidebar() {
  const menus = [
    { name: "Main", path: "/" },
    { name: "Sub", path: "/sub"},
    { name: "Board", path: "/board"}
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