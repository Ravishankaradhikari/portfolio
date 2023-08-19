import react, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    // const form = useRef();
    // const [done, setDone] = useState(false)

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_xqvxc2s', 'template_pk1aehk', form.current, 'lgo9hf44tyPcRv4wS')
    //         .then((result) => {
    //             console.log(result.text);
    //             setDone(true);
    //             form.reset();
    //         }, 
    //         (error) => {
    //             console.log(error.text);
    //         });
    // };

    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xqvxc2s', 'template_pk1aehk', form.current, 'lgo9hf44tyPcRv4wS')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                form.current.reset(); // Use form.current.reset() instead of form.reset()
            })
            .catch((error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact-form' id='contact'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>

                    </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='to_name' className='user' placeholder='Name' />
                    <input type='email' name='from_name' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message'></textarea>
                    <input type='submit' value='Send' className='button' />
                    <span>{done && 'Thanks for Contacting me!'}</span>
                    <div className='blur c-blur1' style={{ background: 'var(--purple)' }}>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact