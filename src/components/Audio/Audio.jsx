import React from 'react';

export default function Audio() {
  let audio1 = new Audio();
  audio1.src = './TechnoTronic2.mp3';
  // audio1.src = 'https://www.youtube.com/watch?v=RvRhUHTV_8k';
  //   const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  //   let audioSource = null;
  //   let analyser = null;

  //   audio1.play();
  //   audioSource = audioCtx.createMediaElementSource(audio1);
  //   analyser = audioCtx.createAnalyser();
  //   audioSource.connect(analyser);
  //   analyser.connect(audioCtx.destination);

  //   analyser.fftSize = 128;
  //   const bufferLength = analyser.frequencyBinCount;
  //   const dataArray = new Uint8Array(bufferLength);
  //   const barWidth = window.innerWidth / bufferLength;

  //   x = 0;
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   analyser.getByteFrequencyData(dataArray);
  //   for (let i = 0; i < bufferLength; i++) {
  //     barHeight = dataArray[i];
  //     ctx.fillStyle = 'white';
  //     ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
  //     x += barWidth;
  //   }

  //   requestAnimationFrame(animate);
  //   animate();
  //   useEffect(() => {});

  return <audio id="audio"></audio>;
}
