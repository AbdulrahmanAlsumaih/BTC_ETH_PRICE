from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from api import BTC_COINBASE_BUY, BTC_COINBASE_SELL, ETH_COINBASE_BUY, ETH_COINBASE_SELL, BTC_BLOCKCHAIN_BUY_SELL, ETH_BLOCKCHAIN_BUY_SELL


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(BTC_COINBASE_BUY.router)
app.include_router(BTC_COINBASE_SELL.router)
app.include_router(ETH_COINBASE_BUY.router)
app.include_router(ETH_COINBASE_SELL.router)
app.include_router(BTC_BLOCKCHAIN_BUY_SELL.router)
app.include_router(ETH_BLOCKCHAIN_BUY_SELL.router)
