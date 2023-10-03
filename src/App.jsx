import React, { useState } from 'react';
import { InputBox } from './componant';
import Usecurrencyinfo from "./hooks/Usecurrencyinfo";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [covertedamount, setcovertedamount] = useState(0);
  const Usecurrency = Usecurrencyinfo(from);
  let usecurrencykey = Object.keys(Usecurrency);

  const swet = () => {
    setfrom(to)
    setto(from)
    setcovertedamount(amount)
    setamount(covertedamount)
  }
  const convartamount = () => {
    setcovertedamount(amount * Usecurrency[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoptions={usecurrencykey}
                oncurrencyChange={(currency) => setfrom(currency)}
                onamountChange={(amount) => setamount(amount)}
                selectcurrency={from}
                disableddata={to}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swet}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={covertedamount}
                currencyoptions={usecurrencykey}
                oncurrencyChange={(currency) => setto(currency)}
                selectcurrency={to}
                disableddata={from}
                amountDiseble={true}

              />
            </div>
            <button onClick={convartamount} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to  {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
