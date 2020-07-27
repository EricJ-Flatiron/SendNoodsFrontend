import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function LoginButton() {

    let history = useHistory();

    function handleClick() {
        history.push("/login");
    }
  
    return (
      <div>
          <Button color="inherit" onClick={handleClick}>Login</Button>
      </div>
    );
}