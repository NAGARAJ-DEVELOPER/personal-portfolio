import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import CustomAlert from "./components/CustomAlert";
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
  };

  const closeAlert = () => {
    setAlertMessage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }


  const handleClick = (event) => {
    if (!email || email.trim() === "") {
      event.preventDefault(); // Prevent the link from opening
      showAlert("Email body cannot be empty!");
    }
  };

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col xs={12} lg={12} md={6} xl={5}>
              <h2>Connect me via mail</h2>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col xs={8} md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                <Col xs={8}>
                  <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" /> 
                  </Col>
                  <Col xs={8}>
                  <button type="submit" > <a onClick={handleClick} href={`mailto:nagarajkolle18@gmail.com?subject=Connect%20with%20you&body=${encodeURIComponent("Dear Nagaraju Kolle,\n\n"+email+"\n\nThanks and Regards,\n\n")}`} target="_blaink" style={{ textDecoration: 'none',color:"black"}} > Submit</a></button>
                  </Col>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
