import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Board from "./pages/Board";
import Board2 from "./pages/Board2";
import Board3 from "./pages/Board3";
import Board4 from "./pages/Board4";
import Board5 from "./pages/Board5";
import Board6 from "./pages/Board6";
import Board7 from "./pages/Board7";
import Board8 from "./pages/Board8";
import Board9 from "./pages/Board9";
import Board10 from "./pages/Board10";
import CreatePost from "./pages/CreatePost";
import BoardDetail from "./pages/Detail";
import UpdatePost from "./pages/UpdatePost";
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
  width: 100%;
  max-width: 1100px;
  margin: ${config.HeaderHeight} auto ;
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
              <Route path="/board2" element={<Board2 />} />
              <Route path="/board3" element={<Board3 />} />
              <Route path="/board4" element={<Board4 />} />
              <Route path="/board5" element={<Board5 />} />
              <Route path="/board6" element={<Board6 />} />
              <Route path="/board7" element={<Board7 />} />
              <Route path="/board8" element={<Board8 />} />
              <Route path="/board9" element={<Board9 />} />
              <Route path="/board10" element={<Board10 />} />
              <Route path="/detail/:id" element={<BoardDetail />} />
              <Route path="/updatepost" element={<UpdatePost />} />
              <Route path="/createpost" element={<CreatePost />} />
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
