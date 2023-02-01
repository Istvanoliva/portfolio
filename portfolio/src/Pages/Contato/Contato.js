import React, { useState, useRef } from 'react';

import Header from '../../Components/Header/Header';

import { checkInputs } from '../../utils/swal/swalEmailjs';
import { templateId, userId, serviceId  } from '../../utils/emailsJs/user';
import sendEmailjs from '../../utils/emailsJs/sendEmail';

import gitHubLogo from '../../images/GitHub_Logo.png';
import linkedin from '../../images/linkedin.png';

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
        checkInputs(name, message, email);
        sendEmailjs(serviceId, templateId, form.current, userId);
        setState(INITAL_STATE);
    };

    return (
        <div>
            <Header />
            <section className="email-section">
                <h1>Contato !</h1>
                <div>
                    <h3>Envie uma mensagem!</h3>
                </div>

                <form ref={ form } onSubmit={ sendEmail }>
                    <label htmlFor="name">
                      Nome:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite seu nome..."
                            onChange={ handleChange }
                            value={ name }
                        />
                    </label>

                    <label htmlFor="email">
                      Email:
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Digite seu email..."
                            onChange={ handleChange }
                            value={ email }
                        />
                    </label>

                    <label htmlFor="message">
                      Mensagem:
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Digite sua mensagem..."
                            value={ message }
                            onChange={ handleChange }
                        />
                    </label>

                    <button className="sub-btn" type="submit">Enviar!</button>
                </form>

                <section className="links-container">
                    <div>
                        <a href="https://github.com/istvanoliva" target="_blank" rel="noreferrer">
                            <img src={ gitHubLogo } alt="Link para Github" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/istvan-oliva/" target="_blank" rel="noreferrer">
                            <img src={ linkedin } alt="Link para Linkedin" />
                        </a>
                    </div>
                </section>
            </section>
        </div>
    );
}


export default Contato;
