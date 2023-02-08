import React from 'react';

import Header from '../../Components/Header/Header';
import img from '../../images/Perfil-2023.jpg';

function Inicio() {
    return (
        <div>
            <Header />
            <section>
                <img src={ img } />
                <div>
                    <h1>ISTVAN OLIVA<span>.</span></h1>
                </div>
                <div>
                    <h2>Front-end Developer</h2>
                </div>
                <div>
                    <p>Gosto de trabalhar com criação.</p>
                    <p>Aprendendo a aprender.</p>
                    <p>Em busca de novos desafios.</p>
                </div>
            </section>
        </div>
    );
}

export default Inicio;
