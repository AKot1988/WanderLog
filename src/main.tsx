import ReactDOM from 'react-dom/client';
import './index.css';
import MyAppRouter from './router/index.tsx';
import './assets/scss/reset.scss';
import './assets/scss/variables.scss';
import './assets/scss/mixins.scss';
import './assets/fonts/fonts.scss';
import './assets/scss/global.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(<MyAppRouter />);
} else {
  throw new Error('Root element not found');
}
