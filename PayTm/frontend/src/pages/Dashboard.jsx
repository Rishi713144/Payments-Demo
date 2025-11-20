import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
    const navigate = useNavigate();

    // If no token → go to signin (prevents crash on direct access)
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/signin");
        }
    }, [navigate]);

    // If token exists, show dashboard safely
    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={"10,000"} />
                <Users />
            </div>
        </div>
    );
};
