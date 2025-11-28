import ReactDOM from "react-dom/client";
import './index.css';
import MyAppRouter from './router/router.tsx';

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(<MyAppRouter />);
} else {
  throw new Error("Root element not found");
}