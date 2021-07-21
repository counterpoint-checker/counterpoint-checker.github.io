import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Appbar from './appbar/Appbar';

import Form from './pages/Form';
import Preview from './pages/Preview';
import DGrid from './pages/DGrid';
import Profile from './pages/Profile';
import { renderAbc } from 'abcjs';

import { AbcNotation } from "@tonaljs/tonal";

function toAbc(notes) {
    // notes is a string of space-separated notes like A4 Bb5
    return notes.split(' ').map(note => (
        AbcNotation.scientificToAbcNotation(note)
    )).join(' | ');
}

const useStyles = (theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(3),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
});

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
            notes1: '',
            notes2: '',
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
        Grade: <DGrid />,
        Team: <Profile />,
    });

    StepperTop() {
        const { activeStep, classes } = this.state;
        const length = Object.keys(this.stages()).length;
        return (            
            <div>
                {activeStep === length - 1 ? (
                    <Button onClick={this.handleReset}>Reset</Button>
                ) : (    
                    <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.backButton}
                    >
                        Back
                    </Button>
                )}                

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
            <div>
                <Appbar />

                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <div className={classes.root}>
                    {this.StepperTop()}

                    <Typography
                        className={classes.instructions}
                        variant='h3'
                    >
                        {steps[activeStep]}
                        {contents[activeStep]}
                    </Typography>
                </div>
            
            </div>
        );
    }
}

export default withStyles(useStyles)(App);
