import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Paper, Button, Grid, InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField } from '@material-ui/core';

import Abcjs from './Abcjs';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        padding: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: '100%',
    },
}));

function Submit() {
    return (
        <Box
            display="flex"
            justifyContent="flex-end"
        >
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
}

export default function Form() {
    const classes = useStyles();

    const [clef, setClef] = React.useState('Treble');
    const [key, setKey] = React.useState('C');
    const [notes, setNotes] = React.useState('');

    return (
        <Grid container spacing={3}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title}>
                            Cantus Firmus
                        </Typography>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Clef
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={clef}
                                onChange={(event) => setClef(event.target.value)}
                            >
                                {'Treble Alto Bass'.split(' ')
                                    .map(clef => (
                                        <MenuItem value={clef}>
                                            {clef}
                                        </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Notes"
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </Paper>
                </Grid>
            </Grid>
        
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title}>
                            Counterpoint
                        </Typography>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Clef
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={clef}
                                onChange={(event) => setClef(event.target.value)}
                            >
                                {'Treble Alto Bass'.split(' ')
                                    .map(clef => (
                                        <MenuItem value={clef}>
                                            {clef}
                                        </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Notes"
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </Paper>
                </Grid>
                
            </Grid>
        
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Key"
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
            
                    <Abcjs
                        abcNotation={`                    
K:${key}
V: 1 clef=${clef.toLowerCase()}
L:1/1
${notes}
                    `}
                    />
                </Grid>
            </Grid>
        
        </Grid>
    );
}

export function NestedGrid() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.title}>
                Counterpoint Checker
            </Typography>

            <Stages />

            <Form />
            <br />

            <Preview />
        </div>
    );
}
