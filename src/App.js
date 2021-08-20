import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Typography, Paper, Grid, Box, MenuItem, TextField } from '@material-ui/core';

import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { AbcNotation, Midi } from "@tonaljs/tonal";

import Appbar from './appbar/Appbar';

import Form from './pages/Form';
import Preview from './pages/Preview';
import Graded from './pages/Graded';
import Profile from './pages/Profile';

const useStyles = (theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(9),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
});

const theme = createMuiTheme({
    typography: {
        fontSize: 22
    },
});

function toAbc(notes) {
    // notes is a string of space-separated notes like A4 Bb5
    return notes.split(' ').map(note => (
        AbcNotation.scientificToAbcNotation(note)
    )).join(' | ');
}

function toMidi(notes) {
    // notes is a string of space-separated notes like A4 Bb5
    return notes.split(' ').map(note => Midi.toMidi(note));
}

class App extends React.Component {
    constructor(props) {
        super(props);
        const { classes } = this.props;
        this.state = {
            activeStep: 0,
            classes: classes,

            key: 'C',
            clef1: 'Treble',
            clef2: 'Treble',
            notes1: 'c4 d4 e4 f4 g4 a4 b4 c5',
            notes2: 'c4 d4 e4 f4 g4 a4 b4 c5',
        }

        // 1 MEANS CANTUS FIRMUS
        // 2 MEANS COUNTERPOINT
    }

    handleNext = () => {
        const activeStep = this.state.activeStep + 1;
        this.setState({ activeStep });
    };

    handleBack = () => {
        const activeStep = this.state.activeStep - 1;
        this.setState({ activeStep });
    };

    handleReset = () => {
        const activeStep = 0;
        this.setState({ activeStep });
    };

    abc = () => (`
L:1/1
K:${this.state.key}
V: 1 clef=${this.state.clef1.toLowerCase()}
${toAbc(this.state.notes1)}
V: 2 clef=${this.state.clef2.toLowerCase()}
${toAbc(this.state.notes2)}
    `);

    midi = () => ([
        toMidi(this.state.notes1),
        toMidi(this.state.notes2),
    ])

    stages = () => ({
        Input: <div>
            <Form
                key1 = {this.state.key}
                clef1 = {this.state.clef1}
                clef2 = {this.state.clef2}
                notes1 = {this.state.notes1}
                notes2 = {this.state.notes2}

                setKey = {(key) => this.setState({ key })}
                setClef1 = {(clef1) => this.setState({ clef1 })}
                setClef2 = {(clef2) => this.setState({ clef2 })}
                setNotes1 = {(notes1) => this.setState({ notes1 })}
                setNotes2 = {(notes2) => this.setState({ notes2 })}
            />
            <Preview abc={this.abc} />
        </div>,
        Preview: <Preview abc={this.abc} />,
        Grade: <Graded midi={this.midi} key1={this.state.key} />,
        Team: <Profile />,
    });

    StepperTop() {
        const { activeStep, classes } = this.state;
        const length = Object.keys(this.stages()).length;
        return (            
            <div>
                <Button
                    disabled={activeStep === 0}
                    onClick={activeStep === length - 1 ?
                        this.handleReset : this.handleBack}
                    className={classes.backButton}
                >
                    {activeStep === length - 1 ? 'Reset' : 'Back'}
                </Button>

                <Button
                    disabled={activeStep === length - 1}
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                >
                    Next
                </Button>
            </div>
        );
    }

    render() {
        const { classes, activeStep } = this.state;
        const steps = Object.keys(this.stages());
        const contents = Object.values(this.stages());

        return (
            <MuiThemeProvider theme={theme}>
                <Appbar />

                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box mx={9}>
                    {this.StepperTop()}

                    <Typography
                        className={classes.instructions}
                        variant='h4'
                    >
                        {steps[activeStep]}
                        {contents[activeStep]}
                    </Typography>
                </Box>
            
            </MuiThemeProvider>
        );
    }
}

export default withStyles(useStyles)(App);
