import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const axios = require('axios');
// const url = 'https://us-central1-georgefane.cloudfunctions.net/cpoint-api';
const url = 'https://counterpoint-checker.herokuapp.com/';
// const url = 'http://127.0.0.1:8081/';

const columns = [
    { field: 'label', width: 200 },
    { field: 'pass', type: 'boolean' },
    { field: 'notes', width: 400 },
]

// var rows = require('./resp.json');
// rows.forEach( (row, id) => row.id = id);

class DataGridDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
        }
    }

    async componentDidMount() {
        const notes = 'c4 d4 e4 f4 g4 a4 b4 c5';

        const [cantus_firmus, counterpoint] = this.props.midi();
        const key = this.props.key1;
        const headers = {
            "Content-Type":"application/json",
            "Accept":"application/json",
        }
        console.log([cantus_firmus, counterpoint, key]);

        const resp = await axios.post(url, {
            cantus_firmus, counterpoint, key, headers
        });
        const rows = resp.data.data.map((row, id) => (
            { ...row, id: id }
        ));
        this.setState({ rows });
        console.log(rows);
    }

    render() {
        const { rows } = this.state;
        return rows.length ? (
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
            />
        ) : (
            <div>
                Grading...
            </div>
        );
    }    
}

export default DataGridDemo;
