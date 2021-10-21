import React from 'react';
import BTC from '../Btc/btc-view'
import ETH from '../Eth/eth-view'
import './App.css';


export const Body = () => {
  return (
    <div className="App-header" >
      <div style={{
        position: 'absolute', left: '80%', top: '50%',
        transform: 'translate(-54%, -50%)'}}>
          <ETH/>
      </div>
      <div style={{
          position: 'absolute', right: '55%', top: '50%',
          transform: 'translate(-50%, -50%)'}}>
            <BTC/>
        </div>
    </div>
  );
}
export default Body;

