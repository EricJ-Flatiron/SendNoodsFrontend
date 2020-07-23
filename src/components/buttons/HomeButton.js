import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const handleRedirect = () => {
    return <Link to='/' />
}

export default function HomeButton() {
  
    return (
      <div>
          <Button color="inherit" onClick={handleRedirect}><Link to='/'>Home</Link></Button>
      </div>
    );
  }