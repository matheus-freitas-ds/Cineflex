import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../css/GlobalStyle";
import Header from "./Header";
import Home from "./Home";
import MovieSessions from "./MovieSessions";
import MovieSeats from "./MovieSeats";
import Success from "./Success";

export default function App(){

    const [infos, setInfos] = useState([]);
    
    return (
        <>
            <GlobalStyle />   
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home infos={infos} setInfos={setInfos}/>} />
                    <Route path="/sessions/:movieId" element={<MovieSessions infos={infos} setInfos={setInfos}/>} />
                    <Route path="/seats/:sessionId" element={<MovieSeats infos={infos} setInfos={setInfos}/>} />
                    <Route path="/success" element={<Success infos={infos} />} />
                </Routes>
            </BrowserRouter>     
        </>
    )
}