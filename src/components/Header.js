
import styled from "styled-components"

export default function Header() {
    return (
        <Container>
            <p>CINEFLEX</p>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    margin-bottom: 67px;
    height: 67px;
    width: 100%;
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 34px;
        font-weight: 400;
        text-align: center;
        color: #E8833A;
    }
`