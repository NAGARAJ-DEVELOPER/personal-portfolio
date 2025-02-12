import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import CustomAlert from "./CustomAlert"; // Make sure this file exists

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || email.indexOf("@") === -1) {
      showPopup("Please enter a valid email address!");
      return;
    }
    onValidated({ EMAIL: email });
  };

  const clearFields = () => {
    setEmail('');
  };

  const showPopup = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(""), 3000); // Auto-hide after 3 seconds
  };

  const handleClick = (event) => {
    if (!email || email.trim() === "") {
      event.preventDefault(); // Prevent mailto link from opening
      showPopup("Email body cannot be empty!");
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
          <Col xs={10} md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <Col xs={8}>
                  <input
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email Message"
                  />
                </Col>
                <Col xs={4}>
                  <button type="button" onClick={handleClick} style={{ textDecoration: 'none', color: "black" }}>
                    <a
                      href={`mailto:nagarajkolle18@gmail.com?subject=Connect%20with%20you&body=${encodeURIComponent(`Dear Nagaraju Kolle,\n\n${email}\n\nThanks and Regards,\n\n`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: "black" }}
                    >
                      Submit
                    </a>
                  </button>
                </Col>
              </div>
            </form>
          </Col>
        </Row>
      </div>
      {/* Show Custom Popup Alert when needed */}
      {alertMessage && <CustomAlert message={alertMessage} />}
    </Col>
  );
};
