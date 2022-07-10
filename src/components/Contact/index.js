import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

      useEffect(() => {
           setTimeout(() => {
               setLetterClass('text-animate-hover')
           }, 3000)
       }, [])


    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t','o','.']}
                    idx={5}
                    />
                </h1>
                
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input 
                                type='text' 
                                name='name' 
                                placeholder='Nombre' 
                                required>

                                </input>
                            </li>
                            <li className='half'>
                                <input 
                                type='email' 
                                name='email' 
                                placeholder='Email' 
                                required>
                                </input>
                            </li>
                            <li>
                                <input 
                                type='text' 
                                name='subject' 
                                placeholder='Asunto' 
                                required>
                                </input>
                            </li>
                            <li>
                                <textarea
                                type='text' 
                                name='message' 
                                placeholder='Mensaje' 
                                required>
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>       
        </div>
        </>
    )
}

export default Contact;