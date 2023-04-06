import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FooterItem from "./navItem/FooterItem";
import config from "../config";

const StyledFooter = styled.div` 
    display: inline-block;
    background: #343439;
    color: white;
    height: ${config.FooterHeight};
    width: 100%;
`
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 10px;
`

const P = styled.p`
    margin: 10px 0 10px 20px;
    font-size: small;
`

const Footer = () => {

    const menus = [
        { name: "Privacy Policy", path: "/#"},
        { name: "About Us", path: "/#"}
    ];

    return (
        <StyledFooter>
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
                            <FooterItem menu={menu} />
                        </NavLink>
                    );
                })}
            </Menu>
            <div>
                <P>제작: 캡스톤디자인 산전수전팀</P>
                <P>Copyright 2021. 산전수전 All pictures cannot be copied without permission. </P>
            </div>
        </StyledFooter>
    )
}

export default Footer