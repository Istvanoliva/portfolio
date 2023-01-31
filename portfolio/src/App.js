import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './Pages/Inicio/Inicio';
import Projetos from './Pages/Projetos/Projetos';
import Contato from './Pages/Contato/Contato';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <Inicio /> } />
                <Route exact path='/projetos' element={ <Projetos /> } />
                <Route exact path='/contato' element={ <Contato /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
