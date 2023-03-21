import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from './Component/Header';
import Footer from './Component/Footer';

import Main from './pages/Main';
import Sub from './pages/Sub';
import Login from './pages/Login';
import SignUp from './pages/SginUp';
import Sidebar from './Component/Sidebar';
import NotFound from './pages/NotFound';
import MyPage from "./pages/MyPage";
import DevPage from "./pages/TestPage";
import Board from "./pages/Board";

const Body = styled.div`
    display: flex;
    flex-direction: row;
    height : auto;
    min-height: 80vh;
`
const Content = styled.div`
    text-align: center;
    margin: auto;
    flex: 1;
`
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body>
        <Sidebar />
        <Content>
          <Routes>     
            <Route path="/" element = {<Main/>} />
            <Route path="/devpage" element = {<DevPage/>} />
            <Route path="/sub" element = {<Sub/>} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/sginup" element = {<SignUp/>} />
            <Route path="/mypage" element = {<MyPage/>} />
            <Route path="/board" element = {<Board/>} />
            <Route path="*" element = {<NotFound />} />
          </Routes>
        </Content>
      </Body>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
