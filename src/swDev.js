export default function swDev() {
    let SwPath = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(SwPath).then((res) => {
        console.log("res", res);
    })
}