import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: #555;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #2f2f30;
    }
`

function Button({ onClick, children }) {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
  }
  
  export default Button;