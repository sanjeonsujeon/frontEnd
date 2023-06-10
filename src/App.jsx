import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SginUp';
import NotFound from './pages/NotFound';
import Board from "./pages/Board";
import CreatePost from "./pages/CreatePost";
import BoardDetail from "./pages/Detail";
import UpdatePost from "./pages/UpdatePost";
import CrawlingTest from "./pages/CrawlingTest"
import CrawlingTest1 from "./pages/CrawlingTest1"
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
  max-width: 1100px;
  margin: 0 auto ;
  height: auto;
  min-height: calc(100vh - ${config.HeaderHeight});
`

const AppRoutes = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
`

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <Content>
          <AppRoutes>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/board" element={<Board />} />
              <Route path="/detail/:id" element={<BoardDetail />} />
              <Route path="/updatepost" element={<UpdatePost />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/CrawlingTest" element={<CrawlingTest />} />
              <Route path="/CrawlingTest1" element={<CrawlingTest1 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppRoutes>
        </Content>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
