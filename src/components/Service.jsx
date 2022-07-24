import styled from "styled-components"
import WomenTablet from "../img/person3.png";
import MiniCard from "./MiniCard";
import Play from "../img/play2.png";
import { useState } from "react";

const Container = styled.div`
    display: flex;

    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Image = styled.img`
    display: ${props => props.open && "none"};
    height: 100%;
    width: 100%;
    margin-left: 5px;
`;

const Video = styled.video`
        display: ${props => !props.open && "none"};
        height: 300px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;

        @media only screen and (max-width: 480px){
            width: 100%;
        }
`;

const Right = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Wrapper = styled.div`
    margin-top: 100px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px){
        padding: 20px;
    }
`;

const Title = styled.h1`
    
`;

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 25px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
`;

const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 33%;
`;

export default function Service() {

    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;

    return (
        <Container>
            <Left>
                <Image open={open} src={WomenTablet} />
                <Video open={open} autoPlay loop controls src="assets/video.mp4"/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple Process to Start</Title>
                    <Desc>
                        We provide digital experience services to startups
                        and small businesses looking for a partner to help
                        with their digital media, design & development, lead
                        generation and communication requirements. We work
                        with you, not for you. Although we have a great
                        resource.
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play} />How it works
                    </Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video open={open} autoPlay loop controls src="assets/video.mp4"/>
                    <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}
