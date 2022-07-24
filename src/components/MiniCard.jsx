import styled from "styled-components";
import Search from "../img/search2.png";


const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: -1px 1px 25px -5px rgba(0,0,0,0.59);
    -webkit-box-shadow: -1px 1px 25px -5px rgba(0,0,0,0.59);
    -moz-box-shadow: -1px 1px 25px -5px rgba(0,0,0,0.59);

    @media only screen and (max-width: 480px){
        width: 50px;
    }
`;

const Image = styled.img`
    width: 20px;
`;

const Text = styled.span`
    margin-top: 10px;
    text-align: center;

    @media only screen and (max-width: 480px){
        font-size: 14px;
    }
`;

export default function MiniCard() {
  return (
    <Container>
        <Image src={Search}/>
        <Text>
            Lorem ipsum dolor sit amet consectetur
        </Text>
    </Container>
  )
}