import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function LogoutButton() {

    let history = useHistory();

    function handleClick() {
        history.push("/logout");
    }
  
    return (
      <div>
          <Button color="inherit" onClick={handleClick}>Logout</Button>
      </div>
    );
}