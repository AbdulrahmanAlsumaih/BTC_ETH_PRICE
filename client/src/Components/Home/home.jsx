import React from 'react';
import BTC from '../Btc/btc-view'
import ETH from '../Eth/eth-view'
import './App.css';


export const home = () => {
  return (
    <div className="App-header">
      <BTC/>
      <ETH/>
    </div>
  );
}
export default home;

