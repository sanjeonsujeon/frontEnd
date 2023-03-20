import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: #343439;
    color: white;
    display : flex;
    padding : 0 0 0 20px;
    height: 80px;
`

const Header = () => {

    return (
        <StyledHeader>
            <h1>LOGO</h1>
        </StyledHeader>
            
    )
}

export default Header