import React from 'react'
import "../Web3Builders.css"

import { Web3Context } from '../App'

const Web3 = () => {
    const { activate, deactivate, active, account } = React.useContext(Web3Context)
    if (active) {
        return (
            <>
                <div className="section-15 wf-section">
                    AAHHH
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="section-15 wf-section">
                    You don't have a wallet L
                </div>
            </>
        )
    }
};

export default Web3;