from fastapi import APIRouter
import httpx
router = APIRouter()


@router.get("/BTC_COINBASE_SELL")
async def Btc_Usd():
    url = "https://api.coinbase.com/v2/prices/BTC-USD/sell"
    async with httpx.AsyncClient() as clinent:
        resp = await clinent.get(url)
        resp.raise_for_status()

        data = resp.json()
    return data
