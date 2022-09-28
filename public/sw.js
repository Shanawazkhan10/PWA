const cacheData = "appV1"
this.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheData).then((res) => {
            res.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/O.chunk.js",
                "/index.html",
                "/",
                "/static/js/vendors~main.chunk.js",
                "/manifest.json",
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=bitcoin,dogecoin,ripple,ethereum,cardano,tether,solana,polkadot,pologon,algorand,vechain,polymath,digibyte,monero,dash,status,fantom,1inch&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            ])
        })
    )
})

this.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res !== undefined) {
                return res
            }
        })
    )
})