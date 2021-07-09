import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AutoGrid from './AutoGrid';
import Preview from './Preview';
import DGrid from './DGrid';
import Appbar from './Appbar';
import Profile from './Profile';

const useStyles = makeStyles((theme) => ({
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
}));

const stages = {
    Input: <AutoGrid />,
    Grade: <DGrid />,
    // Team: <Profile />,
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = Object.keys(stages);
    const contents = Object.values(stages);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    function Last() {
        return (
            <div>
                <Button onClick={handleReset}>Reset</Button>

                <Typography className={classes.instructions}>
                    All steps completed
                </Typography>

                <Profile />
            </div>
        );
    }

    function StepperTop() {
        return (            
            <div>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        );
    }

    return (
        <div>
            <Appbar />

            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <div>
                    {activeStep === steps.length ? <Last /> : (
                        <div>
                            <StepperTop />

                            <Typography
                                className={classes.instructions}
                                variant='h3'
                            >
                                {steps[activeStep]}
                                {contents[activeStep]}
                            </Typography>
                        </div>
                    )}
                </div>
            </div>
        
        </div>
    );
}
