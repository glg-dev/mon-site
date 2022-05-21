import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Glitch from './Glitch';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
    {
      !success ? (
        <div>
          <h1>
            <Glitch text='Contactez-moi' />
          </h1>
          <form onSubmit={sendEmail} className='form' ref={form}>
            <div className="name">
              <label htmlFor="name">Votre nom : </label>
              <input type="text" name="name" tabIndex='1' onChange={(e) => setName(e.target.value)} required />
            </div>
            {name.length < 1 && <span id='error-name' className='error-input'>Veuillez renseigner votre nom</span>}
            <div className="email">
              <label htmlFor="email">Votre email : </label>
              <input type="email" name="email" placeholder='exemple@mail.fr' tabIndex='2' onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {email.length < 1 && <span id='error-email' className='error-input'>Veuillez renseigner votre email</span>}
            <div className="message">
              <label htmlFor="message">Votre message : </label>
              <textarea name="message" placeholder='Votre message ici' onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            {message.length < 1 && <span id='error-message' className='error-input'>Veuillez écrire un message</span>}
            <Button props={success && 'success'} />
          </form>
        </div>
      ) : (
        <div>
          <p className='success'>Votre message a bien été envoyé !</p>
          <NavLink to='/' className='nav-link'>Retour à l'accueil</NavLink>
        </div>
      )
    }
    </div>
  );
};

export default ContactForm;