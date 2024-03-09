// contact form component
import { useState } from "react";
import "../Pages/HomePage.css";
import axios from "axios";

export const ContactForm = ({ onClose, showCloseButton }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = { email, name, message };
    console.log("Form data:", formData);
    const API_ENDPOINT =
      "https://mfg9emrvth.execute-api.us-east-1.amazonaws.com/prod/send-email"; // TODO: Add your API endpoint here

    try {
      // Send a POST request to your endpoint
      const response = await axios.post(API_ENDPOINT, formData);

      // Handle response here
      console.log("Email sent successfully:", response.data);

      // Optionally reset form fields
      setEmail("");
      setName("");
      setMessage("");

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <>
      <div>
        {showCloseButton && (
          <button className="close-button" onClick={onClose}>
            X
          </button>
        )}
        <h3 className="form-div">Contact DigitalForge</h3>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-div">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-div">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                // style={{ resize: "none" }}
              ></textarea>
            </div>
            <button id="homePageSubmitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
