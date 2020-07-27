import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function SignupButton() {

    let history = useHistory();

    function handleClick() {
        history.push("/signup");
    }
  
    return (
      <div>
          <Button color="inherit" onClick={handleClick}>Sign Up</Button>
      </div>
    );
}