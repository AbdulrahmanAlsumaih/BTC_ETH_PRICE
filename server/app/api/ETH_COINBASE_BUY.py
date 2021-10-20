from fastapi import APIRouter
import httpx

router = APIRouter()


@router.get("/ETH_COINBASE_BUY")
async def Eth_Usd():

    url = "https://api.coinbase.com/v2/prices/ETH-USD/buy"
    async with httpx.AsyncClient() as clinent:
        resp = await clinent.get(url)
        resp.raise_for_status()
        data = resp.json()
    return data
