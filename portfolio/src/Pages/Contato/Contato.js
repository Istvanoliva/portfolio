import React from 'react';

import Header from '../../Components/Header/Header';

import gitHubLogo from '../../images/GitHub_Logo.png';
import linkedin from '../../images/linkedin.png';

function Contato() {
    return (
        <div>
            <Header />
            <h1>Contato !</h1>
            <section className="email-section">
                <div>
                    <h3>Envie uma mensagem!</h3>
                </div>
                <form>
                    <label htmlFor="name">
                    Nome:
                        <input type="text" id="name" placeholder="Digite seu nome..."/>
                    </label>
                    <label htmlFor="email">
                    Email:
                        <input type="text" id="email" placeholder="Digite seu email..."/>
                    </label>
                    <label htmlFor="message">
                    Mensagem:
                        <textarea type="text" id="message" rows="6" placeholder="Digite sua mensagem..."/>
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
