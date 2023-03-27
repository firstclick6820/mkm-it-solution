import React, {useRef} from "react";
import styled from "styled-components";
// Assets

import ContactImg3 from "../../assets/img/contactmain.svg";

import emailjs from '@emailjs/browser';



export default function Contact() {

  const [messageSent, setMessageSent] = React.useState(false)
  const form = useRef();
  


  const handleSubmit = (event) => {
      event.preventDefault()

      emailjs.sendForm('service_6a4kjss', 'template_x2wpb6i', form.current, 'W7nDObKvKP2OODXLn')

      .then((result) => {
          event.target.reset()
          setMessageSent(true)
          setTimeout(()=> {
            setMessageSent(false)
          }, 3000)
      }, (error) => {
          console.log(error.text);
      });

  }





  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              We are open to response at anytime with the concept of (365/24/7)
              <br />
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

              <Form ref={form} onSubmit={handleSubmit}>
                <label className="font13">Full name:</label>
                <input type="text" id="fname" name="name" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              
                <SumbitWrapper className="flex">
                  <ContactButton  type="submit">Send Message </ContactButton>
                </SumbitWrapper>
              </Form>

              { messageSent && (<p style={{color: 'green'}}>Message Sent Successfully.</p>)}

            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
                  <img src={ContactImg3} alt="office" className="radius6" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #A80009;
  background-color: #A80009;
  width: 100%;
  padding: 15px;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: var(--box-shadow-version1);
  color: #fff;
  :hover {
    background-color: transparent;
    border: 1px solid #A80009;
    color: #A84119;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;












const ContactButton = styled.button`
  border: none;
  background-image: linear-gradient(to left, #870000, #190a05);
  width: 100%;
  padding: 1em;
  transition: box-shadow 300ms ease-in-out;
  outline: none;
  box-shadow: 0 60px 80px rgba(0,0,0,0.60), 0 45px 26px rgba(0,0,0,0.14);
  color: #FEBEBE;
  :hover {
    background-image: linear-gradient(to right, #870000, #190a05);
    transform: scale(1.015);
    box-shadow: 0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15);

  }
`;
