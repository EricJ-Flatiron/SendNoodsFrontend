import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default function OrderButton() {

    let history = useHistory();

    function handleClick() {
        history.push("/order");
    }
  
    return (
      <div>
          <Button color="inherit" onClick={handleClick}><WhiteTextTypography variant='h4'>ORDER SOME FREAKIN NOODLES, YO</WhiteTextTypography></Button>
      </div>
    );
}