import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OrphanagesMap from './pages/OrphanagesMap'

import Landing from './pages/Landing';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/app" element={<OrphanagesMap/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;