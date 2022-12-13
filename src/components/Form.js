import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";

export default function Form({id, name, setName, cpf, setCpf, infos, setInfos, all, selectedSeats}) {

    const navigate = useNavigate();

    function sendForm(e) {
        
        e.preventDefault();

        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"

        const form = {
            ids: id,
            name: name,
            cpf: cpf,
        }

        //console.log(form)

        const promisse = axios.post(URL, form)

        promisse.then((res) => {
            console.log(res.data)
            navigate("/success");
        })
        
        promisse.catch((err) => {
            alert(err.response.data.message)
        })

        setInfos(infos => [...infos, {movieTitle: all.movie.title, date: all.day.date, hour: all.name, seats: id, name: name, cpf: cpf, numberSeats: selectedSeats}]);
        
    }

    return (
        <Container>
            <form onSubmit={sendForm}>
                <label htmlFor="nome">Nome do comprador</label>
                <input type="text" placeholder="Digite seu nome..." id="nome" value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor="cpf">CPF do comprador</label>
                <input type="text" name="cpf" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" placeholder="Digite seu CPF.." id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required/>
                <button type="submit">Reservar assento(s)</button>
            </form>
        </Container>
    )
};

const Container = styled.div`
    width: 458px;
    margin: 0 auto 150px auto;
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 30px;
    }
    input {
        height: 51px;
        margin: 5px 0px 15px 0px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding: 18px;
    }
    label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
    button {
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        margin: 0 auto;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0.04em;
    }
`