import styled from "styled-components"
import Hour from "./Hour";

export default function Session({info, showTimes}){
    
    return(
        <Container>
            <Date>
                <p data-test="movie-day">{info.weekday} - {info.date}</p>
            </Date>
            <Time>
                {showTimes.map((h) => <Hour hour={h.name} index={h} key={h.id}/>)}
            </Time>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 23px;
`;

const Date = styled.div`
    margin-left: 24px;
    height: 35px;
    width: 300px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
`;

const Time = styled.div`
    margin-left: 24px;
    height: 43px;
    width: 90%;
    display: flex;
`;