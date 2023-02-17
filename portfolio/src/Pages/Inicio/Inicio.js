import React from 'react';

import Header from '../../Components/Header/Header';

import img from '../../images/Perfil-2023.jpg';
import linkedin from '../../images/icon-linkedin.png';
import github from '../../images/icon-github.png';

import './Inicio.css';

function Inicio() {
    return (
        <div className="home">
            <Header />
            <div className="card-profile">
                <section className="profile">
                    <div id='div-profile'>
                        <img src={ img } className="image-profile"/>
                    </div>
                    <div>
                        <h1 className="title">Istvan Oliva<span className="show-hide">.</span></h1>
                    </div>
                    <div>
                        <h3 className="stack">Front-end Developer</h3>
                        <hr />
                    </div>
                    <div>
                        <p className="paragraph">Aprendendo a aprender.</p> 
                        <p className="paragraph">Em busca de novos desafios.</p>
                    </div>
                </section>
                <section className="links-container">
                    <div>
                        <a href="https://github.com/istvanoliva" target="_blank" rel="noreferrer">
                            <button className="btn-contact" id="github">
                                <img src={ github } className="contact-btn" />
                            Github
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/istvan-oliva/" target="_blank" rel="noreferrer">
                            <button className="btn-contact" id="linkedin">
                                <img src={ linkedin } className="contact-btn" />
                            Linkedin
                            </button>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Inicio;
