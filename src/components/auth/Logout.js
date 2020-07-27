import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function Logout(logoutProps) {

    let history = useHistory();

    const handleLogout = () => {
        localStorage.clear()
        logoutProps.handleStateChange("token", undefined)
        history.push("/home");
    }

    return (
        <div>
            You've been logged out! Yeah, you. You good-lookin, noodle-lovin, chopstick ninja. Stay Dope. 
            <Button onClick={handleLogout}>PRESS THE BUTTON</Button>
        </div>
    );
}