import { useState, useEffect } from "react";

function Usecurrencyinfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url).then((res) => res.json()).then((res) => setdata(res[currency]));
    }, [currency])
    console.log(data);
    return data;
}
export default Usecurrencyinfo;
