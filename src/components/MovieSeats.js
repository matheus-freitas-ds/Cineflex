import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Seat from "./Seat";
import Form from "./Form";
import Footer from "./Footer";

export default function MovieSeats({infos, setInfos}) {

    const [movieInfo, setMovieInfo] = useState([]);
    const [seats, setSeats] = useState([]);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [id, setId] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [all, setAll] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const {sessionId} = useParams();

    useEffect(() => {

        const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);

        promisse.then((res) => {
            console.log(res.data)
            setAll(res.data)
            setMovieInfo(res.data.movie);
            setSeats(res.data.seats);
            setTime(res.data.name);
            setDate(res.data.day.weekday)
        });

        promisse.catch(() => console.log("Falha na requisição, tente novamente"));
    }, [sessionId]);

    console.log(id)
    console.log(selectedSeats)

    return (
        <>
            <Title>
                <p>Selecione o(s) assento(s)</p>
            </Title>
            <Seats>
                {seats.map((s) => (<Seat seats={s} id={id} setId={setId} key={s.id} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />))}
            </Seats>
            <Label>
                <div>
                    <Selected/>
                    <p>Selecionado</p>
                </div>
                <div>
                    <Available/>
                    <p>Disponível</p>
                </div>
                <div>
                    <Unavailable/>
                    <p>Indisponível</p>
                </div>
            </Label>
            <Form id={id} setId={setId} name={name} setName={setName} cpf={cpf} setCpf={setCpf} all={all} setAll={setAll} infos={infos} setInfos={setInfos} selectedSeats={selectedSeats}/>
            <Footer movieInfo={movieInfo} date={date} time={time} />
        </>
    )
}

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

const Seats = styled.div`
    width: 458px;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0px 25px;
`;

const Label = styled.div`
    width: 458px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    padding: 16px;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        padding: 5px 0px;
    }
`;

const Selected = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
`;

const Available = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
`;

const Unavailable = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #FBE192;
    border: 1px solid #F7C52B;
`;