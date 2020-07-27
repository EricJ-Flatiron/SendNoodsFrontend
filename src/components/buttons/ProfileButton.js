import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function ProfileButton() {

    let history = useHistory();

    function handleClick() {
        history.push("/profile");
    }
  
    return (
      <div>
          <Button color="inherit" onClick={handleClick}>Profile</Button>
      </div>
    );
}