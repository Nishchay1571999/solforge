import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Accounts from './Accounts';
import Blocks from './Blocks';
import Transactions from './Transactions';
import Programs from './Programs';
import Logs from './Logs';


function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/accounts' element={<Accounts />} />
                <Route path='/blocks' element={<Blocks />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/programs' element={<Programs />} />
                <Route path='/logs' element={<Logs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pages