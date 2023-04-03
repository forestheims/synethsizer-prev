import React from 'react';
import { Track } from 'reactronica';
import ToneEffect from './ToneEffect';
import ToneInstrument from './ToneInstrument';

export default function ToneTrack({ steps, instrument, effects }) {
  return (
    <Track steps={steps}>
      <ToneInstrument instrument={instrument} />
      {effects.map((effect) => {
        return <ToneEffect key={effect} effect={effect} />;
      })}
    </Track>
  );
}
