import React from 'react';
import { Instrument } from 'reactronica';

export default function ToneInstrument({
  instrument: { type, oscillator, envelope },
}) {
  return <Instrument type={type} oscillator={oscillator} envelope={envelope} />;
}
