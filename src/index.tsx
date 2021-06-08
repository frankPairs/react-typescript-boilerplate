import { render } from 'react-dom';

import App from './App';
import './styles/variables.css';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');

  if (el) {
    render(<App />, el);
  }
});
