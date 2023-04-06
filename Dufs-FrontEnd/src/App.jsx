import React from "react";
//React Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
//import component
import Header from './Component/Header';
import Footer from './Component/Footer';
import Sidebar from './Component/Sidebar';
//import pages
import Main from './pages/Main';
import Sub from './pages/Sub';
import Login from './pages/Login';
import SignUp from './pages/SginUp';
import NotFound from './pages/NotFound';
import MyPage from "./pages/MyPage";
import DevPage from "./pages/TestPage";
import Board from "./pages/Board";
//import config
import config from "./config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: auto;
    width: 100%;
    height: auto;
    min-height: calc(100vh - ${config.HeaderHeight});
`

const AppRoutes = styled.div`
  width: 85%;
  display: flex;
  height: auto;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
    <BrowserRouter>
      <Header />
      <Content>
        <Sidebar />
        <AppRoutes>
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
        </AppRoutes>
      </Content>
      <Footer />
    </BrowserRouter>
    </Wrapper>
  );
}

export default App;
