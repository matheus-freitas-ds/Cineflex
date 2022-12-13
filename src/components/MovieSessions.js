import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Session from "./Session";
import Footer from "./Footer";

export default function MovieSessions() {
    const [date, setDate] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const {movieId} = useParams();
  
    useEffect(() => {

        const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);

        promisse.then((res) => {
            setDate(res.data.days);     
            setMovieInfo(res.data);
        });

        promisse.catch((err) => console.log(err + " - Falha na solicitação. Por favor, tente novamente"));
    },[ movieId ]);
    
    return(
        <>
            <Title>
                <p>Selecione o horário</p>
            </Title>
            <Container data-test="showtime">
                {date.map((info) => <Session key={info.id} info={info} showTimes={info.showtimes}/>)} 
            </Container>
            <Footer  movieInfo={movieInfo} />
        </>
    )
};

const Title = styled.div`
    height: 110px;
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0.04em;
        text-align: center;
    }
`;

const Container = styled.div`
    margin-bottom: 160px;
`;