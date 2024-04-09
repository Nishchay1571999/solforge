import React from 'react'
import '../styles/FooterStyles.css'
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate = useNavigate()
    const workspacePressed = () => {
        navigate("/")
    }
    return (
        <div className='footer-container'>
            <div className='network-details-container'>
                <p>Current Block: 0</p>
                <p>GAS Price: 0.000007</p>
                <p>GAS Limit: 12345678</p>
                <p>Hardfork: MERGE</p>
                <p>Netwwork ID: 5771</p>
                <p>Mining Status: Automated</p>
                <button onClick={workspacePressed}>
                    <p>WORKSPACE: RICK-...</p>
                </button>
            </div>
        </div>
    )
}

export default Footer