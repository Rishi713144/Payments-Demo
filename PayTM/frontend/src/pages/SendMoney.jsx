import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const id = searchParams.get("id");
    const name = searchParams.get("name");

    const handleTransfer = async () => {
        const transferAmount = parseFloat(amount);

        if (!amount || isNaN(transferAmount) || transferAmount <= 0) {
            alert("Please enter a valid amount greater than 0");
            return;
        }

        setLoading(true);

        try {
            await axios.post(
                "https://payment-app-lked.vercel.app/api/v1/account/transfer",
                {
                    to: id,
                    amount: transferAmount
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            alert(`₹${transferAmount.toFixed(2)} transferred successfully to ${name}!`);
            navigate("/dashboard");

        } catch (error) {
            const errorMsg = error.response?.data?.message ||
                           error.message ||
                           "Transfer failed. Please try again later.";
            alert(`Transfer Failed: ${errorMsg}`);
            console.error("Transfer error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header with Dropdown */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">PayNest</h1>

                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Menu
                            <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-10">
                                <button
                                    onClick={() => {
                                        navigate("/dashboard");
                                        setDropdownOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Dashboard
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Send Money Card */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-8">Send Money</h2>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">
                                {name?.[0]?.toUpperCase() || "?"}
                            </span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name || "Unknown User"}</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Amount (in ₹)
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Enter amount"
                                min="1"
                                step="0.01"
                                disabled={loading}
                            />
                        </div>

                        <button
                            onClick={handleTransfer}
                            disabled={loading || !amount || parseFloat(amount) <= 0}
                            className={`w-full font-medium py-3 rounded-md transition duration-200 flex items-center justify-center gap-2 text-white ${
                                loading || !amount || parseFloat(amount) <= 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-500 hover:bg-green-600 shadow-md"
                            }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                "Initiate Transfer"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
