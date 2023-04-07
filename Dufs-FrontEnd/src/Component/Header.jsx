import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeaderItem from "./navItem/HeaderItem";
import config from "../config";

const StyledHeader = styled.div`
    align-items: center;
    background-color: #343439;
    color: white;
    display : flex;
    height: ${config.HeaderHeight};
    width: 100%;
    
`
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
`


function Header() {

    const menus = [
        { name: "Login", path: "/login"},
        { name: "Sign Up", path: "/sginup"},
        { name: "My Page", path: "/mypage"},
        { name: "Admin", path: "/devpage"}
    ];

    return (
        <StyledHeader>
            <h1>
                <NavLink to="/" style={{color: "white", textDecoration: "none", padding : "0 0 0 20px"}}>LOGO</NavLink>
            </h1>
            <Menu>
                {menus.map((menu, index) => {
                    return(
                        <NavLink
                        exact
                        style={{color: "white", textDecoration: "none", margin: "10px 20px 10px 10px"}}
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