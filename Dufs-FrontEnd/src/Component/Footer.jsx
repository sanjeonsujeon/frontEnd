import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    background: #343439;
    color: #fff;
    position : relative;
    height: 10%;
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