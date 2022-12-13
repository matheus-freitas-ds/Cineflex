import styled from "styled-components"

export default function Seat({seats, id, setId, selectedSeats, setSelectedSeats}) {

    function click () {

        if (!seats.isAvailable){
            return (
                window.alert('Escolha outro assento') 
            )
        } else if (id.includes(seats.id)) {
            setId(id.filter((el) => el !== seats.id));
            setSelectedSeats(selectedSeats.filter((el) => el !== seats.name))
        } else {
            setId(id => [...id, seats.id])
            setSelectedSeats(selectedSeats => [...selectedSeats, seats.name]);
        }
    }
    
    if (seats.isAvailable === true) {
        return (
            <>
                <Available arrayId={id} id={seats.id} onClick={()=> click()} >
                    {seats.name}
                </Available>
            </>
        )
    } 

    else {
        return (
            <>
                <Unavailable onClick={()=> click()}>
                        {seats.name}
                </Unavailable>
            </>    
        )    
    }
};

const Available = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${props => props.arrayId.includes(props.id) ? "#1AAE9E" : "#C3CFD9"};
    border: 1px solid ${props => props.arrayId.includes(props.id) ? "#0E7D71" : "#7B8B99"};
    text-align: center;
    padding: 7px 0px;
    margin: 9px 7px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    cursor: pointer;
`;

const Unavailable = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #FBE192;
    border: 1px solid #F7C52B;
    text-align: center;
    padding: 7px 0px;
    margin: 9px 7px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    cursor: pointer;
`;