import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";

export default function Home() {
    
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {

        const promisse = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        promisse.then((res) => {
            setMoviesList(res.data);
        });

        promisse.catch((err) => console.log(err + " - Falha na solicitação. Por favor, tente novamente"));
    }, []);

    return (
        <>
            <Title>
                <p>Selecione o filme</p>
            </Title>
            <ContainerMovies>
                {moviesList.map((movie) => <Link to={`/sessions/${movie.id}`} key={movie.id}><Movie movie={movie}/></Link>)}
            </ContainerMovies>
        </>
    );
}

const Title = styled.div`
    height: 110px;
    margin-top: 67px;
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

const ContainerMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;