import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Button from './Button';
import Glitch from './Glitch';

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, form.current, process.env.REACT_APP_PUBLICKEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setSuccess(true);
    e.target.reset();
  }


  return (
    <div className='contact-form'>
      <h1>
        <Glitch text='Talk to me :)' />
      </h1>
      <form onSubmit={sendEmail} className='form' ref={form}>
        <div className="name">
          <input 
            type="text" 
            name="name"
            placeholder="Nom"
            tabIndex='1' 
            required 
          />
        </div>

        <div className="email">
          <input 
            type="email" 
            name="email" 
            placeholder='Email' 
            tabIndex='2' 
            required 
          />
        </div>

        <div className="message--submit">
          <div className="message">
            <textarea 
              name="message" 
              placeholder='Votre message ici' 
              required
            >
            </textarea>
          </div>
          <Button props={success ? 'success' : 'send'}/>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;