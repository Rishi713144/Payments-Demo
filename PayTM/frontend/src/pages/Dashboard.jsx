import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export const Dashboard = () => {
    const [balance, setBalance] = useState("0");

    // Fetch balance on mount and keep it updated
    const fetchBalance = async () => {
        try {
            const response = await axios.get(
                "https://payment-app-lked.vercel.app/api/v1/account/balance",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            // Assuming backend returns { balance: 10000 }
            setBalance(response.data.balance.toLocaleString());
        } catch (error) {
            console.error("Failed to fetch balance", error);
            setBalance("Error");
        }
    };

    // Load balance when dashboard opens
    useEffect(() => {
        fetchBalance();
    }, []);

    // Optional: Re-fetch balance every 10 seconds (for real-time feel)
    // Remove if you don't want auto-refresh
    useEffect(() => {
        const interval = setInterval(fetchBalance, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    );
};
