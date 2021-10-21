
function exchangeRecommendedSell(a,b) {

    if (parseInt(a) > parseInt(b))
    {
        return "Coinbase"
    }
    else
    {
        return "Blockchain"
    }
}

export default exchangeRecommendedSell;
