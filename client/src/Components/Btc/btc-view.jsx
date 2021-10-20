import React from 'react';
import bitcoin from './bitcoin.svg' 
import './btc.css';
import useFetch from '../../Api/useFetch'
import exchangeRecommended from '../../Api/exchangeRecommended'



const buyCoinbaseBTC = "http://0.0.0.0/BTC_COINBASE_BUY"
const sellCoinbaseBTC = "http://0.0.0.0/BTC_COINBASE_SELL"
const blockchain = "http://0.0.0.0/BTC_BLOCKCHAIN_BUY_SELL"

function BTCTracker () {

  const { data: buyCoinbase, buyCoinbaseLoading, buyCoinbaseError} = useFetch(buyCoinbaseBTC);
  const { data: sellCoinbase, sellCoinbaseLoading, sellCoinbaseError} = useFetch(sellCoinbaseBTC);
  const { data: blockchainBuyandSell, blockchainLoading, blockchainError} = useFetch(blockchain);
  
    if (buyCoinbaseLoading || sellCoinbaseLoading || blockchainLoading) 
    {
      return <h1> LOADING...</h1>;
    }
    else if (buyCoinbaseError || sellCoinbaseError || blockchainError) 
    {
      console.log(buyCoinbaseError);
      console.log(sellCoinbaseError);
      console.log(blockchainError);
    }
    else
    {
      return (
        <div>
          <div className = "App-btc">
            <img src={bitcoin} className="App-logo-btc" alt="logo" />
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
export default BTCTracker;