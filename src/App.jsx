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
import CreatePost from "./pages/CreatePost";
import GraduateCreatePost from "./pages/GraduateCreatePost";
import InfoCreatePost from "./pages/InfoCreatePost";
import BoardDetail from "./pages/Detail";
import GraduateDetail from "./pages/GraduateDetail";
import InfoBoardDetail from "./pages/InfoDetail"
import UpdatePost from "./pages/UpdatePost";
import GraduateUpdatePost from "./pages/GraduateUpdatePost";
import InfoUpdatePost from "./pages/InfoUpdatePost"
import Dev from "./pages/Dev";
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
              <Route path="/board/:id/" element={<Board />} />
              <Route path="/detail/:id" element={<BoardDetail />} />
              <Route path="/graduatedetail/:id" element={<GraduateDetail />} />
              <Route path="/infodetail/:id" element={<InfoBoardDetail />} />
              <Route path="/updatepost" element={<UpdatePost />} />
              <Route path="/graduateupdatepost" element={<GraduateUpdatePost />} />
              <Route path="/infoupdatepost" element={<InfoUpdatePost />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/graduatecreatepost" element={<GraduateCreatePost />} />
              <Route path="/infocreatepost" element={<InfoCreatePost />} />
              <Route path="/dev" element={<Dev />} />
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
