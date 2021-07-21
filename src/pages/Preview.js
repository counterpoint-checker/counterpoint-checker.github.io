import { Typography, Paper } from '@material-ui/core';

import { Midi } from 'react-abc';
import Abcjs from './Abcjs';

export default function Preview(props) {
    const abc = props.abc();
    return (
        <div>
            <Abcjs abcNotation={abc} />
            <Midi
                notation={abc}
                key={abc}
                midiParams={{ qpm: 333 }}
            />
        </div>
    );
}