import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        George Fane
                    </Typography>
                    <Typography variant="subtitle1">
                        UMich 2024
                    </Typography>
                    <Typography variant="subtitle1">
                        Business and CS
                    </Typography>

                    <Typography>
                        <Link
                            href="https://www.linkedin.com/in/george-fane/"
                            target='_blank'
                        >
                            LinkedIn
                        </Link>
                    </Typography>

                    <Typography>
                        <a
                            href="https://github.com/GeorgeFane"
                            target='_blank'
                        >
                            GitHub
                        </a>
                    </Typography>

                    <Typography>
                        <a
                            href="https://www.georgefane.com/"
                            target='_blank'
                        >
                            Website
                        </a>
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image="https://avatars.githubusercontent.com/u/39439818?v=4"
                title="Live from space album cover"
            />
        </Card>
    );
}
