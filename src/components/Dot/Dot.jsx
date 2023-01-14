import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import styles from './Dot.css';
import { useTheme } from '../../context/themeProvider';
// import * as Tone from 'tone';

export default function Dot(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  //   const [triggerTone, setTriggerTone] = useState(false);

  const { theme, num, setNum, playing, forward, playPause } = useTheme();
  const { multiplier, toneClicked, themeX, themeY, themeZ, inverseSpeed } =
    theme;
  //   const synth = toneClicked ? new Tone.MembraneSynth().toDestination() : null;

  //   function playNote() {
  //     const now = Tone.now();
  //     triggerTone ? synth.triggerAttack('C4', now) : synth.triggerRelease(now);
  //   }

  //   function releaseNote() {
  //     const now = Tone.now();
  //     synth.releaseAttack(now);
  //   }

  //   useEffect(() => {
  //     if (toneClicked) {
  //       playNote();
  //     }
  //   }, [triggerTone]);

  useFrame((state, delta) => {
    const { ndex, length } = props;
    setNum((num) =>
      forward
        ? num + (playing ? delta : 0) / inverseSpeed
        : num - (playing ? delta : 0) / inverseSpeed
    );
    console.log('num, forward, playing', num, forward, playing);
    const x = themeX(ndex, multiplier, num);
    const y = themeY(ndex, multiplier, num);
    const z = themeZ(ndex, multiplier, num);
    // console.log('ndex', ndex);
    // if (z >= 0.95 && ndex === 66) {
    //   setTriggerTone(true);
    // }
    // z >= 0.95 && ndex === 66 ? setTriggerTone(true) : setTriggerTone(false);
    // if (z > 0.95 && z < 0.95024 && ndex === 1 && !triggerTone) {
    //   setTriggerTone(true);
    // } else if (z > 0.95 && z < 0.95024 && triggerTone) {
    //   setTriggerTone(false);
    // }
    // if (ndex === 1) console.log('z :>> ', triggerTone, z);
    ref.current.position.x = x;
    ref.current.position.y = y;
    ref.current.position.z = z;
  });

  return (
    <mesh
      className={styles.Dot}
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={(event) => console.log('event.target', ref.current.position)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[0.09, 9, 9]} />
      <meshStandardMaterial color={hovered ? 'yellowgreen' : 'orange'} />
    </mesh>
  );
}
