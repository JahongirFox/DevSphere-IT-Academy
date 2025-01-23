import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export const Contact = () => {
    const form = useRef();

    const sendNumber = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('devsphereitacademy200809', 'devsphereitacademy2008', form.current, {
          publicKey: '4BFDol30vcI7OxzY5',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
       );
  };
  return (
      <div className='Contact'>
        <form ref={form} onSubmit={sendNumber}>
          <div className='Center'>
            <div className='Form1'>
              {/* <p className='p-text'>Ro'yxatdan o'tish:</p> */}
              <p className='p-text2'>Kursga yozilish uchun <br /> ro'yxatdan o'ting :</p>
              <input type="text" placeholder='Jahongir Raxmatjonov' name="to_name" /><br />
              <input type="tel" placeholder='+998 (99) 999-99-99' name="to_number" /><br />
              <button type="submit"   value="Yuborish" >Yuborish</button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Contact;