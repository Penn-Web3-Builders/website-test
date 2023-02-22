import React, { useState } from "react";
import "../../Web3Builders.css";
import Bars from "../../images/bars-solid.svg";
import { NavLink, Link } from "react-router-dom";
import classes from "./topNavBar.module.css";

import { Web3Context } from '../../App'

import Web3Bar from './web3Bar'

export default function TopNav() {
  const { activate, deactivate, active, account } =
    React.useContext(Web3Context);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  function truncate(str, n) {
    return str.length > n
      ? str.slice(0, 6) + "..." + str.slice(str.length - 5, str.length)
      : str;
  }

  return (
    <div className={classes.navbar}>
      <div className={classes["navbar-mini"]}>
        <Link to="/">
          <div className={classes.logo}>
            <p>WEB3</p>
            <p className={classes.red}>BUILDERS</p>
          </div>
        </Link>
        <div>
          <img
            src={Bars}
            alt="svg"
            className={classes["menu-icon"]}
            onClick={menuOpenHandler}
          />
        </div>
      </div>
      <div
        className={
          menuIsOpen ? classes["nav-items"] : classes[("nav-items", "hidden")]
        }
      >
        <ul className={classes["nav-links"]}>
          <a href="https://www.web3builders.community/" target="_blank">
            <li>BLOG</li>
          </a>
          <li>
            <NavLink to="partnerships">PARTNERSHIPS</NavLink>
          </li>
          <li>CONTACT</li>

          {active ? (
            // <div className="absolute">
            <div className={classes["greeting"]}>
              <p style={{ color: "red" }}>WELCOME,</p>
              <p>{truncate(account, 12)}</p>
            </div>
          ) : (
            <button>CONNECT WALLET</button>
          )}
        </ul>
      </div>
    </div>
  );
  //   return (
  //     <div className="navbar-logo-left wf-section" style={{'opacity': 1}}>
  //         <div className="wide-div">
  //             {active && <div className='absolute'><i>{account}</i></div>}
  //             <div role="banner" className="navbar-logo-left-container shadow-three w-nav">
  //                 <div className="container-2">
  //                     <div className="navbar-wrapper">
  //                         <a href="./Web3Builders.html" className="navbar-brand w-nav-brand">
  //                             <div className="text-block-6">
  //                                 WEB3<br></br>
  //                                 <span className="text-span-12">BUILDERS</span>
  //                             </div>
  //                         </a>
  //                         <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
  //                             <ul role="list" className="nav-menu-two w-list-unstyled">
  //                                 <li>
  //                                     <a href="./Web3Builders.html" target="_blank"
  //                                         className="nav-link-1">W3B &nbsp;2023</a>
  //                                 </li>
  //                                 <li>
  //                                     <a href="./Web3Builders.html" className="nav-link-1"
  //                                        >CONTACT</a>
  //                                 </li>
  //                                 <li>
  //                                     <a href="./Web3Builders.html" target="_blank"
  //                                         className="nav-link-1">DOCS</a>
  //                                 </li>
  //                             </ul>
  //                         </nav>
  //                         <div className="menu-button-2 w-nav-button" style={{'WebkitUserSelect': 'text'}} aria-label="menu"
  //                             role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu"
  //                             aria-expanded="false">
  //                             <div className="w-icon-nav-menu"></div>
  //                         </div>
  //                     </div>
  //                 </div>
  //                 <div className="w-nav-overlay" id="w-nav-overlay-0"></div>
  //             </div>
  //         </div>
  //     </div>
  //   )
}
