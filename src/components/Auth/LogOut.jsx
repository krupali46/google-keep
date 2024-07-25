import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const LogOut = () => {
const { logout } = useContext(AuthContext);

const handleLogout = async () => {
    try {
    await logout();
    } catch (error) {
    console.error("Logout error:", error);
    }
};

return <button onClick={handleLogout}>Logout</button>;
};

export default LogOut;