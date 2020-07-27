import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function HomeButton() {

    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }
  
    return (
      <div>
          <Button color="inherit" onClick={handleClick}>Home</Button>
      </div>
    );
}