import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
