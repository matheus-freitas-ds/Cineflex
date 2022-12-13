import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Hour({hour, index}){
    
    return(
        <>
            <Link to={`/seats/${index.id}`}>
                <Container>
                    <p data-test="showtime">{hour}</p>
                </Container>
            </Link>
        </>)
}

const Container = styled.div`
    margin-right: 8px;
    height: 43px;
    width: 83px;
    border-radius: 3px;
    background-color: #E8833A;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p {
        color:#FFFFFF;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.02em;
        text-align: center;
    }
`;