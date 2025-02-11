import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import CustomAlert from "./CustomAlert"; // Make sure this file exists
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [messages, setMessages] = useState(""); // State to store input message
  const [firstNames, setFirstNames] = useState(""); // State to store input message
  const [lastNames, setLastNames] = useState(""); // State to store input message
  const [emails, setEmails] = useState(""); // State to store input message
  const [phones, setPhones] = useState(""); // State to store input message
  const [alertMessage, setAlertMessage] = useState("");
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  const openWhatsApp = () => {

    if(firstNames==""){
      showPopup("Please enter First Name");
    }
    else if(lastNames==""){
      showPopup("Please enter Last Name");
    } else if(phones.length!=10){
      showPopup("Please enter Mobile Number");
    }
    else if(messages==""){
      showPopup("Please enter Message");
    }
    else{
    const phoneNumber = "917032732836"; // Replace with the actual phone number
    const message = encodeURIComponent(`Hello, my name is  ${firstNames}  ${lastNames} \n\n I would like to disuss with you i.e\n  ${messages} \n Contact details :\nMobile No: ${phones} \n Email Id : ${emails}`);
    const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(waLink, "_blank"); // Opens WhatsApp link in a new tab
    }
  };


  const showPopup = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(""), 3000); // Auto-hide after 3 seconds
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={firstNames} placeholder="First Name"   onChange={(e) => setFirstNames(e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={lastNames} placeholder="Last Name"   onChange={(e) => setLastNames(e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={emails} placeholder="Email Address"   onChange={(e) => setEmails(e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={phones} placeholder="Phone No."   onChange={(e) => setPhones(e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message"  value={messages}
        onChange={(e) => setMessages(e.target.value)}></textarea>
                      <button type="submit"  onClick={openWhatsApp}><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
         {/* Show Custom Popup Alert when needed */}
      {alertMessage && <CustomAlert message={alertMessage} />}
      </Container>
    </section>
  )
}
