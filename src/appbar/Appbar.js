import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { GitHub } from '@material-ui/icons';

import Login from './Login';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <div className={classes.root}>
                        <img width='222' src='https://media.discordapp.net/attachments/705838282440835164/866890707494109194/logo1_no_background.png' />
                    </div>

                    <Typography className={classes.root} variant="body1">
                        Alex Beloiu, Yongwei Che, George Fane, Jason Zhang
                    </Typography>

                    <IconButton
                        color='inherit'
                        href="https://github.com/counterpoint-checker"
                        target='_blank'
                    >
                        <GitHub />
                    </IconButton>

                    <Login />
                </Toolbar>                
            </AppBar>

            <Toolbar />
        </div>
    );
}
