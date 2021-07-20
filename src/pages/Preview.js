import { Typography, Paper } from '@material-ui/core';

import { Midi } from 'react-abc';
import Abcjs from './Abcjs';

export default function Preview(props) {
    const abc = props.abc();
    return (
        <div>
            <Midi
                notation={abc}
                key={abc}
                midiParams={{ qpm: 333 }}
            />
            <Abcjs abcNotation={abc} />
        </div>
    );
}