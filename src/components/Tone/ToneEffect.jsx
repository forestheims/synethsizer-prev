import React from 'react';
import { Effect } from 'reactronica';

export default function ToneEffect({ effect: { type } }) {
  return <Effect type={type} />;
}
