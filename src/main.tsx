import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MarkersProvider } from './api/provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MarkersProvider>
      <App />
    </MarkersProvider>
  </React.StrictMode>,
);
