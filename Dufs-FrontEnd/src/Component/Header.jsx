import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeaderItem from "./NavItem";
import config from "../config";

/* gray #343439 */
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
const Headerdiv = styled.div`

    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

function Header() {
    const menus = [
        { name: "Login", path: "/login"},
        { name: "Sign Up", path: "/sginup"},
        { name: "Admin", path: "/devpage"}
    ];

    return (
        <StyledHeader>
            <Headerdiv>
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
            </Headerdiv>
        </StyledHeader>
    )
}

export default Header