import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Counterpoint Checker
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Alex Beloiu, Yongwei Che, George Fane, Jason Zhang
                    </Typography>    
                    <Button 
                        variant="link"
                        startIcon={<GitHub />}
                        href="https://github.com/counterpoint-checker"
                        target='_blank'
                    />
                </Toolbar>                
            </AppBar>
        </div>
    );
}
