import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("https://payment-app-lked.vercel.app/api/v1/user/bulk?filter=" + filter, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            setUsers(response.data.user || []);
        })
        .catch(err => {
            console.log("Failed to load users:", err);
            setUsers([]);
        });
    }, [filter]);

    return <>
        <div className="font-bold mt-6 text-lg">Users</div>
        <div className="my-2">
            <input onChange={(e) => setFilter(e.target.value)} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>
        <div>
            {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </>
}

function User({ user }) {
    const navigate = useNavigate();
    return <div className="flex justify-between my-4">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mr-3">
                <div className="text-xl">{user.firstName[0]}</div>
            </div>
            <div className="flex flex-col justify-center">
                <div>{user.firstName} {user.lastName}</div>
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <Button onClick={() => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}
