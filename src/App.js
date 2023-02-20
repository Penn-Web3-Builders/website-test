import React, { useEffect } from "react";
import TopNav from "./components/nav-bar/topNavBar";
import Landing from "./components/landing/landing";
import BottomNavBar from "./components/nav-bar/bottomNavbar";

import { Route, Routes, Navigate } from "react-router-dom";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import Partnerships from "./components/partnerships/Partnerships";

export const Web3Context = React.createContext();

function App() {
  const { activate, deactivate, active, account } = useWeb3React();
  useEffect(() => {
    activate(Injected);
  }, []);
  return (
    <Web3Context.Provider value={{ activate, deactivate, active, account }}>
      <div className="App">
        <TopNav></TopNav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/partnerships" element={<Partnerships />} />
        </Routes>
        {/* <Landing></Landing> */}
        <BottomNavBar></BottomNavBar>
      </div>
    </Web3Context.Provider>
  );
}

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export default App;
