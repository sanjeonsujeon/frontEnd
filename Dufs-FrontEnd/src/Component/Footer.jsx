import React from "react";
import styled from "styled-components";
import config from "../config";



const StyledFooter = styled.div` 
    display: inline-block;
    color: black;
    height: ${config.FooterHeight};
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`
const P = styled.p`
    margin: 10px 0 10px 20px;
    font-size: small;
`

const Footer = () => {

    return (
        <StyledFooter>
            <div>
                <P>제작: 캡스톤디자인 산전수전팀</P>
                <P>Copyright 2023. 산전수전 All pictures cannot be copied without permission. </P>
            </div>
        </StyledFooter>
    )
}

export default Footer