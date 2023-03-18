import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Main from '../pages/Main';
import Sub from '../pages/Sub';
import Sidebar from "../Component/Sidebar";

const Center = styled.div`
    height: 92vh
    display: inline-block;
    flex-direction: row;
`
function Routers () {
    return(
        <BrowserRouter>
            <Center>
                <Sidebar />
                <Routes>    
                    <Route path="/*" element = {<Main/>} />
                    <Route path="/sub" element = {<Sub/>} />
                </Routes>
            </Center>
        </BrowserRouter>
    );
}
export default Routers;