import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success({infos}) {

    const navigate = useNavigate();

    console.log(infos);

    return (
        <>
            <Title>
                <p>Pedido feito com sucesso!</p>
            </Title>
            <Container>
                <div>
                    <h1>Filme e sessão</h1>
                    <p>{infos[0].movieTitle}</p>
                    <p>{infos[0].date} - {infos[0].hour}</p>
                </div>
                <div>
                    <h1>Ingressos</h1>
                    {infos[0].numberSeats.map((seat, index) => <p key={index}> Assento {seat} </p>)}
                </div>
                <div>
                    <h1>Comprador</h1>
                    <p>Nome: {infos[0].name}</p>
                    <p>CPF: {infos[0].cpf}</p>
                </div>
            </Container>
            <Button onClick={() => navigate("/")}>
                <p>Voltar pra Home</p>
            </Button>
        </>
    )
}

const Title = styled.div`
    width: 100%;
    padding: 90px 16px 0px 16px;
    margin: 0 auto;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #247A6B;
        margin: 0 auto;
        text-align: center;
    }
`

const Container = styled.div`
    padding: 30px;
    div {
        padding: 30px 0px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
    }
`

const Button = styled.div`
    width: 458px;
    margin: 0 auto;
    
    p{
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
        text-align: center;
        padding: 12px;
    }
`