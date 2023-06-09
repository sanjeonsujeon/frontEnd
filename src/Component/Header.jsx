import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeaderItem from "./Header-NavItem";
import config from "../config";
import personImage from "../images/person.png";
import searchImage from "../images/search.png";

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
    height: 100%;
    max-width: ${config.BodyWidth};
    margin: 0 auto;
`

function Header() {
    const menus = [
        { path: "/#", image: searchImage, alt:"search"},
        { path: "/login", image: personImage, alt:"login"}
    ];

    return (
        <StyledHeader>
            <Headerdiv>
                <h1>
                    <NavLink to="/" style={{color: "white", textDecoration: "none", margin: "auto"}}>LOGO</NavLink>
                </h1>
            <Menu>
                {menus.map((menu, index) => {
                    return(
                        <NavLink
                        exact
                        style={{color: "white", textDecoration: "none", margin: "auto 20px auto 0"}}
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