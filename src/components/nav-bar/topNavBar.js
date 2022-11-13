import React from 'react'
import "../../Web3Builders.css"

export default function TopNav() {
  return (
    <div className="navbar-logo-left wf-section" style={{'opacity': 1}}>
        <div className="wide-div">
            <div role="banner" className="navbar-logo-left-container shadow-three w-nav">
                <div className="container-2">
                    <div className="navbar-wrapper">
                        <a href="./Web3Builders.html" className="navbar-brand w-nav-brand">
                            <div className="text-block-6">
                                WEB3<br></br>
                                <span className="text-span-12">BUILDERS</span>
                            </div>
                        </a>
                        <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                            <ul role="list" className="nav-menu-two w-list-unstyled">
                                <li>
                                    <a href="./Web3Builders.html" target="_blank"
                                        className="nav-link-1">W3B &nbsp;2023</a>
                                </li>
                                <li>
                                    <a href="./Web3Builders.html" className="nav-link-1"
                                       >CONTACT</a>
                                </li>
                                <li>
                                    <a href="./Web3Builders.html" target="_blank"
                                        className="nav-link-1">DOCS</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="menu-button-2 w-nav-button" style={{'WebkitUserSelect': 'text'}} aria-label="menu"
                            role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                            aria-expanded="false">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
                <div className="w-nav-overlay" id="w-nav-overlay-0"></div>
            </div>
        </div>
    </div>
  )
}