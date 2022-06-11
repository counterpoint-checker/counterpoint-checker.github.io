import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({ setLine, setNotes, onClickClear }) {
  const [value, setValue] = React.useState('Cantus Firmus');

  const handleChange = (event) => {
    setValue(event.target.value);
    setLine(event.target.value);
    onClickClear()
  };

  return (
    <FormControl component="fieldset">
      <FormLabel>
        Which line are you editing?
      </FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Cantus Firmus" control={<Radio />} label="Cantus Firmus" />
        <FormControlLabel value="Counterpoint" control={<Radio />} label="Counterpoint" />
      </RadioGroup>
    </FormControl>
  );
}
