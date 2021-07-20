import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id' },
    { field: 'pass', type: 'boolean' },
    { field: 'label', width: 200 },
    { field: 'notes' },
]

const labels = [
    'Harmonically good',
    'Melodically good',
    'Ranges good',
    'One peak',
    'Peaks are not at the same place',
    'Cantus Firmus notes in key',
    'CounterPoint notes in key',
    'Cantus Firmus Linear',
    'CounterPoint Linear',
    'Motion of the Music',
    'No Three Parallel Motion in a Row',
    'Perfect Fifths & Octaves',
    'Hidden Fifths & Octaves',
    '7ths resolve',
    'Leaps are followed by opposite direction',
    'No voice-crossing',
    'No voice-overlap',
    'First interval is good',
    'Last interval is good',
];

const rows = labels.map((label, id) => {
    const pass = Math.random() < 0.5;
    return { label, id, pass };
})

export default function DataGridDemo() {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
        />
    );
}
