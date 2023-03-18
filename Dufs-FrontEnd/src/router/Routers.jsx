import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Main from '../pages/Main';
import Sub from '../pages/Sub';
import P404 from "../pages/404";
import Sidebar from "../Component/Sidebar";


function Routers () {
    return(
        <BrowserRouter>
                <Sidebar />
                <Routes>    
                    <Route path="/*" element = {<Main/>} />
                    <Route path="/sub" element = {<Sub/>} />
                    <Route path="/404" element = {<P404/>} />
                </Routes>
        </BrowserRouter>
    );
}
export default Routers;