import React, { useContext } from "react";
import Form from '../Components/Form';
import { AppContext } from '../context/stateManager';  
const Contact = () => {
  const { theme } = useContext(AppContext);  
  
  return (
    <div className={`contact-theme-${theme}`}>  {}
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
}

export default Contact;
