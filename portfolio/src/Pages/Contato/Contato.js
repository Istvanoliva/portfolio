import React, { useState, useRef } from 'react';

import Header from '../../Components/Header/Header';

import { templateId, userId, serviceId  } from '../../utils/emailsJs/user';
import sendEmailjs from '../../utils/emailsJs/sendEmail';

import './Contato.css';

import img from '../../images/icons-email.png';

function Contato() {
    const INITAL_STATE = { name: '', email: '', message: '' };
    const [ state, setState ] = useState(INITAL_STATE);

    const { name, message, email } = state;
    const form = useRef();

    const handleChange = ({ target: { id, value } }) => {
        setState({ ...state, [id]: value });
    };

    const sendEmail = (event) => {
        event.preventDefault();
        sendEmailjs(serviceId, templateId, form.current, userId);
        setState(INITAL_STATE);
    };

    return (
        <div>
            <Header />
            <div id="image-msg" >
                <div id="image-bg">
                    <img src={ img } id="image" />
                </div>
            </div>
            <div>
                <h2 id="contact-title">Mande sua mensagem<br />
                    Como posso te ajudar hoje?</h2>
            </div>
            <form ref={ form } onSubmit={ sendEmail } className="form-contato">

                <div className="input-text">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome..."
                        onChange={ handleChange }
                        value={ name }
                        className="input"
                        required
                    />
                            
                </div>
                <div className="input-text">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email..."
                        onChange={ handleChange }
                        value={ email }
                        className="input"
                        required
                    />
                </div>
                <div className='input-textarea'>
                        
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="8"
                        value={ message }
                        onChange={ handleChange }
                        required
                    />
                        
                </div>
                <button type="submit" className="btn-submit">Enviar!</button>
            </form>
        </div>
    );
}


export default Contato;
