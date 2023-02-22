import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './components/landing/landing';
import Layout from './layout';
import Web3 from './pages/web3';

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";


export const Web3Context = React.createContext();

function App() {
  const { activate, deactivate, active, account } = useWeb3React();
  // useEffect(() => {
  //   activate(Injected);
  // },[]);
  return (
    <Web3Context.Provider value={{ activate, deactivate, active, account }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="web3" element={<Web3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Web3Context.Provider>
  );
}

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export default App;
