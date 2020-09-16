import React from 'react';
import { Link } from 'react-router-dom';

// MUI Imports
import Typography from '@material-ui/core/Typography';


export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Collaborate
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }