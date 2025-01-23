import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensuring the root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found in the HTML.');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
