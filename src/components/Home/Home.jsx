import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Home.css';
import { useTheme } from '../../context/themeProvider';
import { Song, Track, Instrument, Effect } from 'reactronica';
import Beam from '../Beam/Beam';
import Dot from '../Dot/Dot';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { modulo, multiplier, toneClicked } = theme;
  const [sphereArray, setSphereArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSphereArray(Array(multiplier).fill(1));
    setLoading(false);
  }, [multiplier]);

  return (
    <div className={styles.Home}>
      <Song bpm={225} isPlaying={toneClicked} volume={-15}>
        {/* <Track
          steps={[
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            null,
            null,
            null,
            ['C4', 'E4', 'G3'],
            ['C4', 'E4', 'G3'],
            ['C4', 'E4', 'G3'],
            ['C4', 'E4', 'G3'],
            ['C4', 'E4', 'G3'],
            null,
            null,
            null,
            ['D4', 'F#3', 'B3'],
            ['D4', 'F#3', 'B3'],
            ['D4', 'F#3', 'B3'],
            ['D4', 'F#3', 'B3'],
            ['D4', 'F#3', 'B3'],
            null,
            null,
            null,
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            null,
            null,
            null,
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            ['A3', 'C#4', 'E3'],
            null,
            null,
            null,
            ['C4', 'E4', 'G3'],
            ['C4', 'E4', 'G3'],
            ['C4', 'E4', 'G3'],
            ['C4', 'E4', 'G3'],
            ['C4', 'E4', 'G3'],
            null,
            null,
            null,
            ['D4', 'F#3', 'B3'],
            ['D4', 'F#3', 'B3'],
            ['D4', 'F#3', 'B3'],
            ['D4', 'F#3', 'B3'],
            ['D4', 'F#3', 'B3'],
            null,
            null,
            null,
            ['A4', 'C#4', 'E4'],
            ['A4', 'C#4', 'E4'],
            ['A4', 'C#4', 'E4'],
            ['A4', 'C#4', 'E4'],
            ['A4', 'C#4', 'E4'],
            null,
            null,
            null,
          ]}
          onStepPlay={(step, index) => {
            // doSomething(step, index);
          }}
        >
          <Instrument
            type="polySynth"
            oscillator={{ type: 'square' }}
            envelope={{ attack: 0.1, sustain: 1.0, release: 0.8, decay: 0.2 }}
          />
          <Effect type="distortion" wet={0.01} />
          <Effect type="feedbackDelay" wet={0.5} />
          <Effect type="autoFilter" />
        </Track> */}
        <Track
          steps={[
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'A3',
            'C#4',
            'C4',
            'E4',
            'G3',
            'C4',
            'E4',
            'G3',
            'C4',
            'E4',
            'G3',
            'C4',
            'E4',
            'G3',
            'C4',
            'E4',
            'C4',
            'E4',
            'D4',
            'F#3',
            'B3',
            'D4',
            'F#3',
            'B3',
            'D4',
            'F#3',
            'B3',
            'D4',
            'F#3',
            'B3',
            'D4',
            'F#3',
            'D4',
            'F#3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'A3',
            'C#4',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'E3',
            'A3',
            'C#4',
            'A3',
            'C#4',
            'C4',
            'E4',
            'G3',
            'C4',
            'E4',
            'G3',
            'C4',
            'E4',
            'G3',
            'C4',
            'E4',
            'G3',
            'C4',
            'E4',
            'C4',
            'E4',
            'D4',
            'F#3',
            'B3',
            'D4',
            'F#3',
            'B3',
            'D4',
            'F#3',
            'B3',
            'D4',
            'F#3',
            'B3',
            'D4',
            'F#3',
            'D4',
            'F#3',
            'A4',
            'C#4',
            'E4',
            'A4',
            'C#4',
            'E4',
            'A4',
            'C#4',
            'E4',
            'A4',
            'C#4',
            'E4',
            'A4',
            'C#4',
            'A4',
            'C#4',
          ]}
          onStepPlay={(step, index) => {
            // doSomething(step, index);
          }}
        >
          <Instrument
            type="monoSynth"
            oscillator={{ type: 'square' }}
            envelope={{ attack: 0.1, sustain: 0.1, release: 0.05, decay: 0.2 }}
          />
          <Effect type="autoFilter" />
        </Track>
      </Song>
      <Canvas camera={[0, 0, 6]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {!loading &&
          sphereArray.map((n, i, r) => {
            return <Dot key={i} ndex={i} />;
          })}

        <Beam position={[0, 0, -1]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
