import { useState } from "react";
import { convertCurrency } from "../../services/currencyService";

function CurrencyExecutor() {

    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(null);

    const execute = async () => {

        try {

            const data = await convertCurrency(from, to, amount);

            setResult(data.conversion);

        } catch {

            alert("Conversion Failed");

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold mb-6">

                Currency Converter

            </h1>

            <div className="flex gap-4">

                <input
                    className="border p-3 rounded"
                    value={from}
                    onChange={(e)=>setFrom(e.target.value)}
                />

                <input
                    className="border p-3 rounded"
                    value={to}
                    onChange={(e)=>setTo(e.target.value)}
                />

                <input
                    className="border p-3 rounded"
                    type="number"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                />

                <button
                    onClick={execute}
                    className="bg-green-600 text-white px-6 rounded"
                >
                    Convert
                </button>

            </div>

            {

                result && (

                    <div className="mt-8 bg-white shadow rounded p-6">

                        <h2 className="text-2xl font-bold">

                            {result.amount} {result.from}

                        </h2>

                        <p>

                            = {result.convertedAmount.toFixed(2)} {result.to}

                        </p>

                        <p>

                            Exchange Rate: {result.exchangeRate}

                        </p>

                    </div>

                )

            }

        </div>

    );

}

export default CurrencyExecutor;