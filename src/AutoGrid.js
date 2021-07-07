import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Typography, Paper, Grid, FormControlLabel, InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField } from '@material-ui/core';

import Abcjs from './Abcjs';

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

export default function AutoGrid() {
    const classes = useStyles();
    const [key, setkey] = React.useState('C');
    const [minor, setminor] = React.useState(false);
    const [cpclef, setcpclef] = React.useState('Treble');
    const [cfclef, setcfclef] = React.useState('Treble');
    const [cpnotes, setcpnotes] = React.useState('z');
    const [cfnotes, setcfnotes] = React.useState('z');

    return (
        <div className={classes.root}>
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
                                value={cfclef}
                                onChange={(event) => setcfclef(event.target.value)}
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
                            onChange={(event) => setcfnotes(event.target.value)}
                        />
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper className={classes.paper}>
                        <InputLabel id="demo-simple-select-label">
                            Key
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={key}
                            onChange={(event) => setkey(event.target.value)}
                        >
                            {'A, A#, Bb, B, C, C#, Db, D, D#, Eb, E, F, F#, Gb, G, G#'.split(', ').map(clef => (
                        <MenuItem value={clef}>{clef}</MenuItem>

                            ))}
                        </Select>
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
                                value={cpclef}
                                onChange={(event) => setcpclef(event.target.value)}
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
                            onChange={(event) => setcpnotes(event.target.value)}
                        />
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={minor}
                                    onChange={() => setminor(!minor)}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Minor Key"
                        />
                    </Paper>
                </Grid>
            </Grid>
              
            <Abcjs
                abcNotation={`                    
L:1/1
K:${key + (minor ? 'm' : '')}
V: 1 clef=${cfclef.toLowerCase()}
${cfnotes}
V: 1 clef=${cpclef.toLowerCase()}
${cpnotes}
            `}
            />
        </div>
    );
}
