import React from 'react';
import ethereum from './ethereum.svg' 
import './eth.css';
import useFetch from '../../Api/useFetch'
import Paper from '@mui/material/Paper';

const buyCoinbaseEtc = "http://0.0.0.0/ETH_COINBASE_BUY"
const sellCoinbaseEtc = "http://0.0.0.0/ETH_COINBASE_SELL"
const blockchain = "http://0.0.0.0/ETH_BLOCKCHAIN_BUY_SELL"

function ETHTracker () {

  const { data: buyCoinbase, buyCoinbaseLoading, buyCoinbaseError } = useFetch(buyCoinbaseEtc);
  const { data: sellCoinbase, sellCoinbaseLoading, sellCoinbaseErrors} = useFetch(sellCoinbaseEtc);
  const { data: blockchainBuyandSell, blockchainLoading, blockchainError} = useFetch(blockchain);
   const timeArea = {
   height: 450,
   width: 450,
   textAlign: 'center',
   rounded: true,
   paddingTop: 15,
   backgroundColor: '#ecf0f1',
   opacity: .9,
 };

    if (buyCoinbaseLoading || sellCoinbaseLoading || blockchainLoading) 
    {
      return <small> LOADING...</small>;
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
        <Paper style={timeArea}elevation={24}>
          <div className = "App-btc">
            <img src={ethereum} className="App-logo-btc" alt="logo" />
            </div>
              <small>{buyCoinbase?.data.base} Coinbase Buy Price<br></br></small>
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
export default ETHTracker;
