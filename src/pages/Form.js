import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Typography, Paper, Grid, FormControlLabel, InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: '100%',
    },
}));

function LabelGrid(props) {
    const classes = useStyles();
    return (
        <Grid item xs>
            <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.title}>
                    {props.label}
                </Typography>
            </Paper>
        </Grid>
    );
}

function ClefGrid(props) {
    const classes = useStyles();
    return (
        <Grid item xs>
            <Paper className={classes.paper}>
                <TextField
                    select
                    label='Key'
                    value={props.clef}
                    onChange={(event) => props.setClef(event.target.value)}
                >
                    {'Treble Alto Bass'.split(' ').map(value => (
                        <MenuItem value={value}>
                            {value}
                        </MenuItem>
                    ))}
                </TextField>
            </Paper>
        </Grid>
    );
}

function NotesGrid(props) {
    const classes = useStyles();
    return (
        <Grid item xs>
            <Paper className={classes.paper}>
                <TextField
                    label='Notes'
                    value={props.notes}
                    onChange={(event) => props.setNotes(event.target.value)}
                />
            </Paper>
        </Grid>
    );
}

export default function AutoGrid(props) {
    console.log(props)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <LabelGrid label='Cantus Firmus' />
                <ClefGrid clef={props.clef1} setClef={props.setClef1} />
                <NotesGrid notes={props.notes1} setNotes={props.setNotes1} />

                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Key"
                            value={props.key1}
                            onChange={(event) => props.setKey(event.target.value)}
                        />
                    </Paper>
                </Grid>
            </Grid>
        
            <Grid container spacing={3}>
                <LabelGrid label='Counterpoint' />                
                <ClefGrid clef={props.clef2} setClef={props.setClef2} />
                <NotesGrid notes={props.notes2} setNotes={props.setNotes2} />

                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Typography>
                            Notes: [note][#,b, ][octave] e.g. C4, C#4
                        </Typography>
                        <Typography>
                            Key: [note][#,b, ][m, ] e.g. C, C#, Cm, C#m
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    );
}
