import { useState } from "react";
import { convertCurrency } from "../../services/currencyService";
import Button from "../../components/ui/Button";

const CURRENCIES = [
    { code: "AED", name: "UAE Dirham" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "DKK", name: "Danish Krone" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "INR", name: "Indian Rupee" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "KRW", name: "South Korean Won" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "THB", name: "Thai Baht" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "USD", name: "US Dollar" },
    { code: "ZAR", name: "South African Rand" },
];

function CurrencyExecutor() {

    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const execute = async () => {

        try {

            setLoading(true);

            const data = await convertCurrency(from, to, amount);

            setResult(data.conversion);

        } catch {

            alert("Conversion failed");

        } finally {

            setLoading(false);

        }

    };

    const inputClasses = "rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-3 text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none focus:border-[var(--color-signal-indigo)] transition-colors";

    return (

        <div>

            <div className="mb-8">

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                    Currency Converter

                </h1>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                    Convert between currencies using real-time exchange rates.

                </p>

            </div>

            <div className="flex flex-wrap gap-4">

                <select
                    className={`${inputClasses} w-48`}
                    value={from}
                    onChange={(e)=>setFrom(e.target.value)}
                >

                    {

                        CURRENCIES.map((currency) => (

                            <option key={currency.code} value={currency.code}>
                                {currency.code} — {currency.name}
                            </option>

                        ))

                    }

                </select>

                <select
                    className={`${inputClasses} w-48`}
                    value={to}
                    onChange={(e)=>setTo(e.target.value)}
                >

                    {

                        CURRENCIES.map((currency) => (

                            <option key={currency.code} value={currency.code}>
                                {currency.code} — {currency.name}
                            </option>

                        ))

                    }

                </select>

                <input
                    className={`${inputClasses} w-32`}
                    type="number"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                />

                <Button
                    onClick={execute}
                    loading={loading}
                >
                    Convert
                </Button>

            </div>

            {

                result && (

                    <div className="mt-8 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 max-w-sm">

                        <h2 className="font-data text-3xl font-medium tabular-data text-[var(--color-ink)]">

                            {result.amount} {result.from}

                        </h2>

                        <p className="font-data mt-2 text-lg text-[var(--color-signal-mint)]">

                            = {result.convertedAmount.toFixed(2)} {result.to}

                        </p>

                        <p className="mt-3 text-sm text-[var(--color-ink-muted)]">

                            Exchange rate: <span className="font-data text-[var(--color-ink)]">{result.exchangeRate}</span>

                        </p>

                    </div>

                )

            }

        </div>

    );

}

export default CurrencyExecutor;