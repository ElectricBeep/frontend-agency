import styled from "styled-components";
import Phone from "../img/phone4.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
    display: flex;

    @media only screen and (max-width: 480px){
        flex-direction: column;
        padding: 30px 20px;
    }
`;

const Left = styled.div`
    flex: 5;

    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Image = styled.img`
    width: 80%;
`;

const Right = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Title = styled.span`
    font-size: 78px;

    @media only screen and (max-width: 480px){
        dz: 50px;
    }
`;

const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`;

const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`;

const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`;

export default function Feature() {
  return (
    <Container>
        <Left><Image src={Phone}/></Left>
        <Right>
            <Title>
                <b>good</b> design<br/>
                <b>good</b> business
            </Title>
            <SubTitle>We know that good design means good business.</SubTitle>
            <Desc>
                We help our clients succeed by creating brand identities, 
                digital experiences, and print materials that communicate clearly, 
                achieve marketing goals, and look fantastic. 
            </Desc>
            <Desc>
                We care about your business and help you achieve marketing 
                goals. 
            </Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}
