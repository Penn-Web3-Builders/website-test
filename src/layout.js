import { Outlet, Link } from "react-router-dom";
import TopNav from './components/nav-bar/topNavBar';
import BottomNavBar from './components/nav-bar/bottomNavbar'
import Web3Bar from './components/nav-bar/web3Bar'


const Layout = () => {
    return (
        <div className="App">
        <Web3Bar></Web3Bar>
        <TopNav></TopNav>
        <Outlet />
        <BottomNavBar></BottomNavBar>
      </div>
    )
  };
  
  export default Layout;