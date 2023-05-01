import React from "react";
import styled from "styled-components";
import config from "../config"

const Side = styled.div`
  display: flex;
  border-left: 2px solid #e0e0e0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: auto;
  min-height: calc(100vh - ${config.HeaderHeight});
`
const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0 30px 0;
`

function DevMainSide() {
  return (
    <Side>
      <Menu>
        <h2>Login</h2>
        <InputForm>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </InputForm>
      </Menu>
    </Side>
  );
}

export default DevMainSide;