import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function AboutButton() {

    let history = useHistory();

    function handleClick() {
        history.push("/about");
    }
  
    return (
      <div>
          <Button color="inherit" onClick={handleClick}>About</Button>
      </div>
    );
}