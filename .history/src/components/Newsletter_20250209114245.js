import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

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
      alert("Email body cannot be empty!");
    }
  };

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col xs={12} lg={12} md={6} xl={5}>
              <h3>You can connect me<br></br>through Email</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col xs={8} md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                <Col xs={8}>
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" /> 
                  </Col>
                  <Col xs={8}>
                  <button type="button" > <a onClick={handleClick} href={`mailto:nagarajukolle18@gmail.com?subject=Connect%20with%20you&body=${encodeURIComponent("Dear Nagaraju Kolle,\n\n"+email)}`} target="_blaink" style={{ textDecoration: 'none',color:"black"}} > Submit</a></button>
                  </Col>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
