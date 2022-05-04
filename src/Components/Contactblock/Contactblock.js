import './Contactblock.scss'
import emailjs from 'emailjs-com'
import React, { useState, useEffect } from 'react'


export default function Contactblock() {

    function sendEmail(e){

    e.preventDefault();

    emailjs.sendForm('service_qvm593j', 'template_v5ats8s', e.target, 'zDURivxLCXLaqMz2N')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }    

    
        const initialState = 'Send Message';
        const [buttonText, setButtonText] = useState(initialState);

        useEffect(() => {
            if(buttonText !== initialState) {
                setTimeout(() => setButtonText(initialState), [6000])
            }
        }, [buttonText])

        const changeText = (text) => setButtonText(text);
    


    return (
        <div className = 'contact'>
            <h1 className = 'contact__title'>Reach out.</h1>
            <form className = 'contact__form' onSubmit = {sendEmail}>
                <input type = 'text' className = 'contact__name' placeholder = 'name' name = 'from_name' />
                <input type = 'email' className = 'contact__email' placeholder = 'email address' name = 'from_email' />
                <textarea className = 'contact__message' placeholder = 'your message' name = 'message'></textarea>
                <button onClick = {() => changeText('Message Sent!')} className = 'contact__button'>{buttonText}</button>
            </form>
        </div>
    )
}