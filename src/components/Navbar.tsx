import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavbarStyles.css'
import { IoWalletSharp } from "react-icons/io5";
import { RiLayoutGridLine } from "react-icons/ri";
import { RiTokenSwapFill } from "react-icons/ri";
import { FaFileContract } from "react-icons/fa";
import { TbTimelineEventText } from "react-icons/tb";
import { HiCommandLine } from "react-icons/hi2";


function Navbar() {
    const navigation = useNavigate();
    const handleAccountsPressed = () => {
        navigation("/accounts");
    }
    const handleBlocksPressed = () => {
        navigation("/blocks");
    }
    const handleTransactionPressed = () => {
        navigation("/transactions");
    }
    const handleProgramsPressed = () => {
        navigation("/programs");
    }
    const handleEventsPressed = () => {
        navigation("/events");
    }
    const handleLogsPressed = () => {
        navigation("/logs");
    }
    return (
        <Fragment>
            <div className='navbar-container '>
                <button onClick={handleAccountsPressed} className='navbar-button'>
                    <IoWalletSharp />
                    <p>Accounts</p>
                </button>
                <button onClick={handleBlocksPressed} className='navbar-button'>
                    <RiLayoutGridLine />
                    <p>Blocks</p>
                </button>
                <button onClick={handleTransactionPressed} className='navbar-button'>
                    <RiTokenSwapFill />
                    <p>Transaction</p>
                </button>
                <button onClick={handleProgramsPressed} className='navbar-button'>
                    <FaFileContract />
                    <p>Programs</p>
                </button>
                <button onClick={handleEventsPressed} className='navbar-button'>
                    <TbTimelineEventText />
                    <p>Events</p>
                </button>
                <button onClick={handleLogsPressed} className='navbar-button'>
                    <HiCommandLine />
                    <p>Logs</p>
                </button>
            </div>
        </Fragment >
    )
}

export default Navbar