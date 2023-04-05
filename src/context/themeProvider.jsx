import { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '../assets/library.js';
import { dripDrops } from '../assets/dripDrops.js';
import * as THREE from 'three';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [displayed, setDisplayed] = useState('Harmony');
  const [theme, setTheme] = useState(themes[displayed]);
  const [themesKeys, setThemesKeys] = useState(Object.keys(themes));
  const [num, setNum] = useState(0);
  const [tracks, setTracks] = useState([
    {
      steps: dripDrops,
      instrument: {
        type: 'monoSynth',
        oscillator: { type: 'square' },
        envelope: { attack: 0.1, sustain: 0.1, release: 0.05, decay: 0.2 },
      },
      effects: [{ type: 'autoFilter' }],
    },
  ]);
  const [playing, setPlaying] = useState(true);
  const [forward, setForward] = useState(true);

  const [color, setColor] = useState('orange');

  const next = () => {
    const indexOfDisplayed = themesKeys.indexOf(displayed);
    if (displayed !== themesKeys[themesKeys.length - 1])
      setDisplayed(themesKeys[indexOfDisplayed + 1]);
  };
  const prev = () => {
    const indexOfDisplayed = themesKeys.indexOf(displayed);
    if (displayed !== themesKeys[0])
      setDisplayed(themesKeys[indexOfDisplayed - 1]);
  };

  const playPause = () => {
    setPlaying(!playing);
  };
  const reverse = () => {
    setForward(!forward);
  };

  useEffect(() => {
    setNum(0);
    setTheme(themes[displayed]);
  }, [displayed]);

  const contextValue = {
    theme,
    setTheme,
    displayed,
    next,
    prev,
    num,
    setNum,
    tracks,
    setTracks,
    reverse,
    playPause,
    forward,
    reverse,
    playing,
    color,
    setColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      'Error: useTheme needs to be called within a ThemeProvider'
    );
  }
  return context;
};
