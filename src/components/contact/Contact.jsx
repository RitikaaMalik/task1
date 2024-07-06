import React from 'react'
import "./contact.css";
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0akuppg', 'template_szebr5e', form.current, 'tfO5glKDFNg4ph2Al')
    e.target.reset()
  };
  return (
    <section id="contact">
         <h5>Get In Touch</h5>
         <h2>Contact Me</h2>
         <div className="container contact__container">
             <div className="contact__options">
              <article className='contact__option'>
                <MdOutlineMail className='contact__option-icon'/>
                 <h4>Email</h4>
                 <h5>ritiika.maliik@gmail.com</h5>
                 <a href="mailto:ritiika.maliik@gmail.com"  target='_blank'>Send a message</a>
              </article>
              <article className='contact__option'>
                <RiMessengerLine className='contact__option-icon'/>
                 <h4>Messenger</h4>
                 <h5>dummyprofile</h5>
                 <a href="https://m.me" target='_blank'>Send a message</a>
              </article>
              <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                 <h4>Whatsapp</h4>
                 <h5>+918273490818</h5>
                 <a href="https://api.whatsapp.com/send?phone=8273490818"  target='_blank'>Send a message</a>
              </article>
             </div>

            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
         </div>
    </section>
  )
}

export default Contact
