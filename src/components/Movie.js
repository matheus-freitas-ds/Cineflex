import styled from "styled-components"

export default function Movie({movie}) {
    return (
        <Container>
            <img src={movie.posterURL} alt={movie.title} key={movie.id}/>
        </Container>
    )
}

const Container = styled.div`
    height: 209px;
    width: 145px;
    border-radius: 3px;
    border: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    margin-left:30px ;
    padding: 8px;
    img {
        width: 100%;
        height: 100%;
    }
    &:hover {    
        cursor: pointer;
    }
`;