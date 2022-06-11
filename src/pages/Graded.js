import * as React from 'react';
import { DataGrid, getThemePaletteMode } from '@material-ui/data-grid';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const axios = require('axios');
// const url = 'https://counterpoint-checker.herokuapp.com/';
const url = 'https://us-central1-georgefane.cloudfunctions.net/counterpoint';

const { apikey } = require('../env.json');

const theme = createMuiTheme({
    typography: {
        fontSize: 22
    },
});

const useStyles = ({
    root: {
        '& .super-app.pass': {
            backgroundColor: 'rgba(157, 255, 118, 0.49)',
        },
        '& .super-app.fail': {
            backgroundColor: '#d47483',
        },
    },
});

const columns = [
    { field: 'label', width: 333 },
    { field: 'pass', width: 144, type: 'boolean',
    cellClassName: (params) =>
        clsx('super-app', {
            pass: params.value,
            fail: !params.value,
        }),
     },
    { field: 'notes', width: 555 },
];

class DataGridDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
        }
    }

    async componentDidMount() {
        const notes = 'c4 d4 e4 f4 g4 a4 b4 c5';

        const [cantus_firmus, counterpoint] = this.props.midi;
        const key = this.props.key1;
        const headers = {
            "Content-Type":"application/json",
            "Accept":"application/json",
        }
        console.log([cantus_firmus, counterpoint, key]);

        const resp = await axios.post(url, {
            cantus_firmus, counterpoint, key, apikey,
            headers
        });
        const rows = resp.data.data.map((row, id) => (
            { ...row, id }
        ));
        this.setState({ rows });
        console.log(rows);
    }

    render() {
        const { classes } = this.props;
        const { rows } = this.state;
        const data = {
            rows, columns, autoHeight: true,
            className: classes.root,
            loading: !rows.length,
        };
        return (
            <DataGrid {...data} />
        );
    }    
}

export default withStyles(useStyles)(DataGridDemo);
