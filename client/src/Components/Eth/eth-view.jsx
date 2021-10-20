import React from 'react';
import ethereum from './ethereum.svg' 
import './eth.css';
import useFetch from '../../Api/useFetch'
import Button from '@mui/material/Button'

const buyCoinbaseEtc = "http://0.0.0.0/ETH_COINBASE_BUY"
const sellCoinbaseEtc = "http://0.0.0.0/ETH_COINBASE_SELL"
const blockchain = "http://0.0.0.0/ETH_BLOCKCHAIN_BUY_SELL"

function ETHTracker () {

  const { data: buyCoinbase, buyCoinbaseLoading, buyCoinbaseError } = useFetch(buyCoinbaseEtc);
  const { data: sellCoinbase, sellCoinbaseLoading, sellCoinbaseErrors} = useFetch(sellCoinbaseEtc);
  const { data: blockchainBuyandSell, blockchainLoading, blockchainError} = useFetch(blockchain);

    if (buyCoinbaseLoading || sellCoinbaseLoading || blockchainLoading) 
    {
      return <h1> LOADING...</h1>;
    }
    else if (buyCoinbaseError || sellCoinbaseErrors || blockchainError)
    { 
      console.log(buyCoinbaseError);
      console.log(sellCoinbaseErrors);
      console.log(blockchainError);
    }
    else 
    {
      return (
        <div>
          <div className = "App-btc">
            <img src={ethereum} className="App-logo-btc" alt="logo" />
              <div>
                <h1>{buyCoinbase?.data.base} Coinbase Buy Price</h1>
                <h1>{buyCoinbase?.data.amount}</h1>
                <h1>{sellCoinbase?.data.base} Coinbase Sell Price</h1>
                <h1>{sellCoinbase?.data.amount}</h1>
                <h1>{blockchainBuyandSell?.data.symbol} Blockchain Sell Price</h1>
                <h1>{blockchainBuyandSell?.data.buy}</h1>
                <h1>{blockchainBuyandSell?.data.symbol} Blockchain Sell Price</h1>
                <h1>{blockchainBuyandSell?.data.sell}</h1>
              </div>
            </div>
        </div>
        
      );
    }
}
export default ETHTracker;
