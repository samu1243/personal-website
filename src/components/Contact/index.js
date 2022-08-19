import { useState, useEffect, useRef } from 'react'
import Letters from '../Letters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['C','o','n', 't', 'a', 'c', 't', '', 'M', 'e' ]
    const refForm = useRef()

    useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'personal_portfolio',
                'template_8y1jt0u',
                refForm.current,
                '5EMA0LxpEY-MiY-C6'
            )
            .then(
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message. Please, try again.')
                }
            )
    }

    return(
        <div className='contact'>
            <div className='text-title'>
                <h1>
                    <Letters letterClass={letterClass} strArray={nameArray} index={10}/>
                </h1>
                <p>I'm always looking for cool projects. Especially interested in large projects. However, feel free to contact me with whichever question or request that you may have. </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required/>
                            <input type='email' name='email' placeholder='Email' required/>
                        </li>
                        <li>
                        <input type='text' name='subject' placeholder='Subject' required/>
                        </li>
                        <li>
                           <textarea placeholder='Message' name='message' required></textarea> 
                        </li>
                        <li>
                        <input type='submit' className='submit-button' value='SEND' required/>
                        </li>
                    </ul>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact