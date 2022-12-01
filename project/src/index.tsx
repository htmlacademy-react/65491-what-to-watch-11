import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const film = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014'
};

root.render(
  <React.StrictMode>
    <App films={films} />
  </React.StrictMode>,
);
