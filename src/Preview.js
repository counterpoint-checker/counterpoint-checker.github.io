import { Typography, Paper } from '@material-ui/core';

export default function Preview() {
    return (
        <Paper>
            <img src='https://www.aboutmusictheory.com/wp-content/uploads/2012/04/counterpoint.png' />
            
            <br />
            <br />

            <audio controls />
        </Paper>
    );
}