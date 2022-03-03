import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

const Inbox = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <>
            <h1>Inbox</h1>
            {currentUser ? (
                <p>
                    You are logged - <Link to="/dashboard">View Dashboard</Link>
                </p>
            ) : (
                <p>
                    <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
                </p>
            )}
        </>
    );
};

export default Inbox;