import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeaderItem from "./HeaderItem";

const StyledHeader = styled.div`
    align-items: center;
    background-color: #343439;
    color: white;
    display : flex;
    padding : 0 0 0 20px;
    height: 80px;
`
const Menu = styled.div`
    display: flex;
    flex-direction: row;

`

function Header() {

    const menus = [
        { name: "Login", path: "/login"},
        { name: "Sign Up", path: "/sginup"}
    ];

    return (
        <StyledHeader>
            <h1>LOGO</h1>
            <Menu>
                {menus.map((menu, index) => {
                    return(
                        <NavLink
                        exact
                        style={{color: "white", textDecoration: "none"}}
                        to={menu.path} 
                        key={index}
                        activeStyle={{color: "black"}}
                        >
                            <HeaderItem menu={menu} />
                        </NavLink>
                    );
                })}
            </Menu>
        </StyledHeader>
            
    )
}

export default Header