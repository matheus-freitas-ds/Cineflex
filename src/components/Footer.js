import styled from "styled-components";

export default function Footer({movieInfo, date, time}) {

    return (
        (date === undefined || time === undefined ? 
            (
                <>
                    <Container data-test="footer">
                        <img src={movieInfo.posterURL} alt="Poster do filme" />
                        <div>
                            <p>{movieInfo.title}</p>
                        </div>
                    </Container>
                </>
            ) : (
                <>
                    <Container data-test="footer">
                        <img src={movieInfo.posterURL} alt="Poster do filme"/>
                        <div>
                            <p>{movieInfo.title}</p>
                            <p>{date} - {time}</p>
                        </div>
                    </Container>
                </>
            )
        )
    )
};

const Container = styled.div`
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;
    display: flex;
    position: fixed;
    bottom: 0px;
    z-index: 2;
    padding: 14px 10px;
    div {
        margin: auto 10px;
        align-items: center;
    }
    img {
        width: 64px;
        border: 8px solid #FFFFFF;
        border-radius: 2px;
    }
    p {
        width: auto;
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        margin: auto 10px;
    }
`;