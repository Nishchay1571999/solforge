import React, { useState } from 'react'
import '../styles/HomeStyles.css';
import { useNavigate } from "react-router-dom";
import { FaLink } from 'react-icons/fa';
import { RiMenuAddLine } from 'react-icons/ri';
function Home() {
    const navigation = useNavigate()
    const [workspaces, setWorkSpaces] = useState<Array<string>>(["Paws of Peril Palace", "Ruff-Ride Retreat"]);
    const quickStartPressed = () => {
        navigation('/accounts')

    }
    const newWorkspacePressed = () => {
        navigation('/accounts')
    }

    return (
        <div className='home-container'>
            <p className='title-text'>Solforge</p>
            <div className='workspace'>
                <p className='subtitle-text'>Workspaces</p>
                <div className='workspace-list'>
                    {
                        workspaces.map((item) => {
                            return <button className='workspace-names-container'>
                                <p className='workspace-names'>{item}</p>
                            </button>
                        })
                    }
                </div>
                <div className='workspaces-actions'>
                    <button onClick={quickStartPressed} className='workspace-action-button'>
                        <FaLink className='icon' />
                        <span>
                            <p className='button-title'>Quick Start</p>
                            <p className='button-subtitle'>Solana</p>
                        </span>
                    </button>
                    <button onClick={newWorkspacePressed} className='workspace-action-button'>
                        <RiMenuAddLine className='icon' />
                        <span>
                            <p className='button-title'>New Workspace</p>
                            <p className='button-subtitle'>Solana</p>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home