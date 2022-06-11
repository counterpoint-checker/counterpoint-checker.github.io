import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import { Button, TextField } from '@material-ui/core';

import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';
import PianoWithRecording from './PianoWithRecording';
import Radios from './Radios';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

export default class App extends React.Component {
  state = {
    recording: {
      mode: 'RECORDING',
      events: [],
      currentTime: 0,
      currentEvents: [],
    },
    firstNote: 'c4',
    firstNoteTemp: 'c4',
  };

  constructor(props) {
    super(props);

    this.scheduledEvents = [];
  }

  getRecordingEndTime = () => {
    if (this.state.recording.events.length === 0) {
      return 0;
    }
    return Math.max(
      ...this.state.recording.events.map(event => event.time + event.duration),
    );
  };

  setRecording = value => {
    this.setState({
      recording: Object.assign({}, this.state.recording, value),
    });

    const setNotes = this.state.line === "Counterpoint" ?
      this.props.setNotes2 : this.props.setNotes1

    if (!value.events) {
      return
    }
    const midis = value.events.map(note => note.midiNumber)
    setNotes(midis)
    console.log('midis', midis)
  };

  setLine = line => {
    this.setState({ line })
    console.log(this.state.line)
  }

  onClickPlay = () => {
    this.setRecording({
      mode: 'PLAYING',
    });
    const startAndEndTimes = _.uniq(
      _.flatMap(this.state.recording.events, event => [
        event.time,
        event.time + event.duration,
      ]),
    );
    startAndEndTimes.forEach(time => {
      this.scheduledEvents.push(
        setTimeout(() => {
          const currentEvents = this.state.recording.events.filter(event => {
            return event.time <= time && event.time + event.duration > time;
          });
          this.setRecording({
            currentEvents,
          });
        }, time * 1000),
      );
    });
    // Stop at the end
    setTimeout(() => {
      this.onClickStop();
    }, this.getRecordingEndTime() * 1000);
  };

  onClickStop = () => {
    this.scheduledEvents.forEach(scheduledEvent => {
      clearTimeout(scheduledEvent);
    });
    this.setRecording({
      mode: 'RECORDING',
      currentEvents: [],
    });
  };

  onClickClear = () => {
    const { events } = this.state.recording

    this.onClickStop();
    this.setRecording({
      events: [],
      mode: 'RECORDING',
      currentEvents: [],
      currentTime: 0,
    });

    const setNotes = this.state.line === "Counterpoint" ?
      this.props.setNotes2 : this.props.setNotes1

    if (!events) {
      return
    }
    const midis = events.map(note => note.midiNumber)
    setNotes(midis)
    console.log('midis', midis)
  };

  onSave = (setNotes) => {
    if (!this.state.recording.events.length) {
      return
    }
    const midis = this.state.recording.events.map(note => note.midiNumber)
    setNotes(midis)
    console.log('midis', midis)
  }

  render() {

    const first = MidiNumbers.fromNote(this.state.firstNote)
    const last = first + 23

    const noteRange = {
      first, last
      // first: MidiNumbers.fromNote('c4'),
      // last: MidiNumbers.fromNote('c6'),
    };
    console.log('noteRange', noteRange)

    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: noteRange.first,
      lastNote: noteRange.last,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    // console.log(this.state.recording.events)
    const setNotes = this.state.line === "Counterpoint" ?
      this.props.setNotes2 : this.props.setNotes1

    const handleChange = (event) => {
      const firstNoteTemp = event.target.value
      this.setState({ firstNoteTemp })

    };

    const handleSubmit = (e) => {
      const firstNote = this.state.firstNoteTemp
      this.setState({ firstNote })

      e.preventDefault()
    }

    return (
      <div>
        <br />
        <Radios
          setLine={this.setLine}
          setNotes={setNotes}
          onClickClear={this.onClickClear}
        />

        <br />
        <div className="mt-5">
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <PianoWithRecording
                recording={this.state.recording}
                setRecording={this.setRecording}
                noteRange={noteRange}
                width={300}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={keyboardShortcuts}
              />
            )}
          />
        </div>

        <form
          onSubmit={handleSubmit}
        >
          <TextField
            label='Lowest Note'
            helperText='Press Enter'

            value={this.state.firstNoteTemp}
            onChange={handleChange}
          />
        </form>
        {/* <br /> */}
        {/* <br /> */}

      </div>
    );
  }
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
