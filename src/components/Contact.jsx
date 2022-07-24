import styled from "styled-components"
import Map from "../img/map1.png";
import Phone from "../img/phone1.png";
import Send from "../img/send1.png";


const Container = styled.div`
    height: 90%;
    background-color: #ffffff;
    background: linear-gradient(135deg, #f0f0ff55 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #f0f0ff 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #f0f0ff55 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #f0f0ff 25%, #ffffff 25%) 0px 0/ 20px 20px;
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const FormContainer = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Title = styled.h1`
    margin: 50px;
    margin-top: 0;
    text-align: center;

    @media only screen and (max-width: 480px){
        margin: 20px;
    }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;

    @media only screen and (max-width: 480px){
        height: 50%;
        margin-right: 0;
    }
`;

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 480px){
        height: 50%;
    }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  border-radius: 5px;

  @media only screen and (max-width: 480px){
        padding: 5px;
    }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 50%;
  padding: 20px;
  border-radius: 5px;

  @media only screen and (max-width: 480px){
        padding: 5px;
        margin-top: 20px;
    }
`;

const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;

    @media only screen and (max-width: 480px){
        padding: 5px;
        font-size: 14px;
    }
`;


const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    @media only screen and (max-width: 480px){
        margin: 20px 0;
      }
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
`;

const Text = styled.span`
    font-size: 20px;
    margin-right: 10px;
`;

export default function Contact() {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Questions? <br /> Let's Get In Touch</Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map}/>
            <Text>1234 Park Avenue, New Yourk, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone}/>
            <Text>+1 234 5678 9101</Text>
            <Text>+1 432 8765 1019</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send}/>
            <Text>allo@gmail.com</Text>
            <Text>allo@yahoo.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  )
}
