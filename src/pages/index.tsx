import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Accounts from './Accounts';
import Blocks from './Blocks';
import Transactions from './Transactions';
import Programs from './Programs';
import Logs from './Logs';
import Layout from '../components/Layout/Layout';
import Events from './Events';


function Pages() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/accounts' element={<Accounts />} />
                    <Route path='/blocks' element={<Blocks />} />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/programs' element={<Programs />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/logs' element={<Logs />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Pages