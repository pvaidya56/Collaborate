import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

// MUI Imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/photos/Oalh2MojUuk)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', 
        marginTop: theme.spacing(2),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));

export default function Register() {
    const classes = useStyles();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        errors: {}
    });
    
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("user", user);
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Get Started with Collaborate! - It's FREE!
                </Typography>
                <form className={classes.form} onSubmit={e => onSubmit(e)}>
                    <TextField
                        required
                        fullWidth="true"
                        label="Username"
                        variant="outlined"
                        value={user.username}
                        name="username"            
                        type="text"
                        onChange={e => onChange(e)}
                    />
                            <TextField
                            fullWidth="true"
                                required
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                value={user.email}
                                name="email"
                                type="email"
                                onChange={e => onChange(e)}
                            />
                            <TextField
                            fullWidth="true"
                                required
                                label="Password"
                                variant="outlined"
                                value={user.password}
                                name="password"
                                type="password"
                                onChange={e => onChange(e)}
                            />
                        <Button type="submit" fullwidth variant="contained" color="primary" className={classes.submit}>
                            Register
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/login">
                                    Already have an account? Login.
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                </form>
                </div>
                </Grid>
            </Grid>
            
    );
}
