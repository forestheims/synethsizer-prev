import React from 'react';
import { Song } from 'reactronica';
import { useTheme } from '../../context/themeProvider';
import ToneTrack from './ToneTrack';

export default function ToneSong() {
  const {
    theme: { toneClicked },
    tracks,
  } = useTheme();

  return (
    <Song bpm={225} isPlaying={toneClicked} volume={-15}>
      {tracks.map((track) => {
        return (
          <ToneTrack
            steps={track.steps}
            instrument={track.instrument}
            effects={track.effects}
          />
        );
      })}
    </Song>
  );
}
