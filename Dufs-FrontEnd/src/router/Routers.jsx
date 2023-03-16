import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainContent from '../Pages/Main';
import SubContent from '../Pages/Sub';
import Sidebar from "../Component/Sidebar";

function Routers () {
    return(
        <BrowserRouter>
            <Sidebar></Sidebar>
            <Routes>
                <Route path="/*" element = {<MainContent/>} />
                <Route path="/sub" element = {<SubContent/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routers;