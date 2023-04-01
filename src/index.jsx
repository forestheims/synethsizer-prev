// entry point
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/themeProvider.jsx';
import ToneSong from './components/Tone/ToneSong.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ThemeProvider>
      <ToneSong />
      <App />
    </ThemeProvider>
  </StrictMode>
);
