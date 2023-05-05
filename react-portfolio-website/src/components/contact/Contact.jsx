import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineComment} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ctf96yp', 'template_0z6c2nu', form.current, 'x3DgvSurceB0RDSl9')
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
            <AiOutlineMail className='contract__option-icon'/>
            <h4>Email</h4>
            <h5>lordhomeless77@gmail.com</h5>
            <a href="mailto:lordhomeless77@gmail.com" target='_blank'>Send a message</a>
           </article>
           <article className="contact__option">
            <RiMessengerLine className='contract__option-icon'/>
            <h4>Messenger</h4>
            <h5>Pattapee Pimton</h5>
            <a href="https://m.me/Divisition" target='_blank'>Send a message</a>
           </article>
           <article className="contact__option">
            <AiOutlineComment className='contract__option-icon'/>
            <h4>Line</h4>
            <h5>pete.peach</h5>
            <a href="https://line.me/ti/p/-PId1ubmO3" target='_blank'>Send a message</a>
           </article>
        </div>
        {/* END OF Contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact