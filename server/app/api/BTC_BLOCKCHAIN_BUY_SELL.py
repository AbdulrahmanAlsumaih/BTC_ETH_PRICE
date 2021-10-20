from fastapi import APIRouter
import httpx
router = APIRouter()


@router.get("/BTC_BLOCKCHAIN_BUY_SELL")
async def Btc_Usd():
    url = "https://api.kucoin.com/api/v1/market/stats?symbol=BTC-USDT"
    async with httpx.AsyncClient() as clinent:
        resp = await clinent.get(url)
        resp.raise_for_status()

        data = resp.json()
    return data
