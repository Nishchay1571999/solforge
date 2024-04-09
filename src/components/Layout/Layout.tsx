import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import '../../styles/LayoutStyles.css'
function Layout({ children }: any) {

    const blackListPages = ["/"];

    const location = useLocation()

    const currentPage = location.pathname

    console.log({ currentPage })

    return (
        <div>
            {blackListPages.includes(currentPage) ? null : <Navbar />}
            <div className='children-container'>
                {children}
            </div>
            {blackListPages.includes(currentPage) ? null : <Footer />}
        </div>
    )
}

export default Layout