import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    display: inline-block;
    background: #343439;
    color: #fff;
    position : relative;
    height: 10vh;
    width: 100%;
    transform : translateY(-100%);
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <h2>Footer</h2>
        </StyledFooter>
    )
}

export default Footer