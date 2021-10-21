import React from 'react';
import bitcoin from './bitcoin.svg' 
import './btc.css';
import useFetch from '../../Api/useFetch'
import exchangeRecommended from '../../Api/exchangeRecommended'
import Paper from '@mui/material/Paper';



const buyCoinbaseBTC = "http://0.0.0.0/BTC_COINBASE_BUY"
const sellCoinbaseBTC = "http://0.0.0.0/BTC_COINBASE_SELL"
const blockchain = "http://0.0.0.0/BTC_BLOCKCHAIN_BUY_SELL"

function BTCTracker () {

  const { data: buyCoinbase, buyCoinbaseLoading, buyCoinbaseError} = useFetch(buyCoinbaseBTC);
  const { data: sellCoinbase, sellCoinbaseLoading, sellCoinbaseError} = useFetch(sellCoinbaseBTC);
  const { data: blockchainBuyandSell, blockchainLoading, blockchainError} = useFetch(blockchain);

  const timeArea = {
    height: 450,
    width: 450,
    textAlign: 'center',
    rounded: true,
    paddingTop: 15,
    backgroundColor: '#FF7F50',
    opacity: 0.9,
   
  };
  
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
        <Paper style={timeArea}elevation={24}>
          <div className = "App-btc">
            <img src={bitcoin} className="App-logo-btc" alt="logo" />
          </div>
          <small>{buyCoinbase?.data.base} Coinbase Buy Price <br></br></small>
          <b>{buyCoinbase?.data.amount}<br></br></b>
          <small>{sellCoinbase?.data.base} Coinbase Sell Price<br></br></small>
          <b>{sellCoinbase?.data.amount}<br></br></b>   
          <small>{blockchainBuyandSell?.data.symbol} Blockchain Sell Price<br></br></small>
          <b>{blockchainBuyandSell?.data.buy}<br></br></b>
          <small>{blockchainBuyandSell?.data.symbol} Blockchain Sell Price<br></br></small>
          <b>{blockchainBuyandSell?.data.sell}<br></br></b>
      </Paper>
      );
    }
}
export default BTCTracker;