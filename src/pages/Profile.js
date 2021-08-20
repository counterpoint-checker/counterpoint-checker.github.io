import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Paper, Grid, Box, MenuItem, TextField, Link } from '@material-ui/core';

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
        width: 222,
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

const team = [
    {
        name: 'Alex Beloiu',
        school: 'UMich 2024',
        major: 'CS',
        linkedin: "https://www.linkedin.com/in/alexandru-beloiu/",
        github: "https://github.com/beloiual",
        site: "https://github.com/beloiual",
        pic: "https://avatars.githubusercontent.com/u/69057074?v=4",
    },
    {
        name: 'Yongwei Che',
        school: 'Princeton 2024',
        major: 'CS',
        linkedin: "https://www.linkedin.com/in/yongwei-che-66525b19b/",
        github: "https://github.com/YongweiChe",
        site: "https://yongweiche.github.io/",
        pic: "https://media-exp3.licdn.com/dms/image/C4E03AQEKUPa2GPYPHg/profile-displayphoto-shrink_200_200/0/1590019973658?e=1631145600&v=beta&t=Sy30H-36UXN-t5fgcmCuSPhKO-7-Kqcqc3PGndEQN60",
    },
    {
        name: 'George Fane',
        school: 'UMich 2024',
        major: 'Business and CS',
        linkedin: "https://www.linkedin.com/in/george-fane/",
        github: "https://github.com/GeorgeFane",
        site: "http://georgefane.github.io/",
        pic: "https://avatars.githubusercontent.com/u/39439818?v=4",
    },
    {
        name: 'Jason Zhang',
        school: 'UMich 2024',
        major: 'Composition and CS',
        linkedin: "https://www.linkedin.com/in/jason-zhang-2755ba1b9/",
        github: "https://github.com/zhangjt1",
        site: "https://counterpoint-checker.github.io/",
        pic: "https://media-exp3.licdn.com/dms/image/C4E03AQGLANbNVmkUHg/profile-displayphoto-shrink_800_800/0/1604624377309?e=1631145600&v=beta&t=xdriNg9aE79ymDdJ_AwOVA14VcyC4zAA8i8Y40xh6ew",
    },
]

function MediaControlCard({ row }) {
    const classes = useStyles();
    const theme = useTheme();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {row.name}
                </Typography>
                <Typography variant="subtitle1">
                    {row.school}
                </Typography>
                <Typography variant="subtitle1">
                    {row.major}
                </Typography>

                <Typography>
                    <Link
                        href={row.linkedin}
                        target='_blank'
                    >
                        LinkedIn
                    </Link>
                </Typography>

                <Typography>
                    <a
                        href={row.github}
                        target='_blank'
                    >
                        GitHub
                    </a>
                </Typography>

                <Typography>
                    <a
                        href={row.site}
                        target='_blank'
                    >
                        Website
                    </a>
                </Typography>
            </CardContent>
        
            <CardMedia
                className={classes.cover}
                image={row.pic}
            />
        </Card>
    );
}

function Cards() {
    return (
        <Grid container spacing={3}>        
            {team.map(row => (
                <Grid item>
                    <MediaControlCard row={row} />
                </Grid>
            ))}
        </Grid>
    );    
}

export default Cards;
