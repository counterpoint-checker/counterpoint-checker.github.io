import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const oauth2 = require('./oauth2.json');

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Login() {
    const classes = useStyles();

    const [image, setImage] = React.useState(null);
    const responseGoogle = (response) => {
        setImage(response.profileObj.imageUrl);
    }
    const onLogoutSuccess = (response) => {
        setImage(null);
    }

    return image ? (
        <GoogleLogout
            clientId={oauth2.web.client_id}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            render={renderProps => (
                <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Avatar className={classes.small} src={image} />}

                    color='inherit'
                    variant='outlined'
                >
                    Logout
                </Button>
            )}
        />
    ) : (
        <GoogleLogin
            clientId={oauth2.web.client_id}
            buttonText="Login"
            onSuccess={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
                <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Avatar className={classes.small} src={'https://img-authors.flaticon.com/google.jpg'} />}

                    color='inherit'
                    variant='outlined'
                >
                    Login
                </Button>
            )}
        />
    );
}

export default Login;
