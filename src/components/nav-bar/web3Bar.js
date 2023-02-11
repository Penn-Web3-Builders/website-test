import React from 'react'
import "../../Web3Builders.css"

import { Web3Context } from '../../App'
import { InjectedConnector } from "@web3-react/injected-connector";

import { Link } from "react-router-dom"

export default function Web3Bar() {
    const { activate, deactivate, active, account } = React.useContext(Web3Context)
    return (
        <div className='fixed h-6 bg-slate-800 w-screen' role="banner">
            <div className="wide-div mx-auto relative">
                <div className='text-white absolute inset-y-0 right-0'>
                    {!active && <button onClick={() => activate(Injected)}>Connect Wallet</button>}
                    {active && <Link to="/web3">Wallet Page</Link>}
                </div>
                {active && <p className='text-white'>{account}</p>}
                {!active && <p className='text-white'>(Not Connected)</p>}
            </div>
        </div>
    )
}

const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
   });