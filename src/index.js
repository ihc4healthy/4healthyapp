import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-tailwind/react';
import { customTheme } from './utils/customTheme';
import UserContextProvider from './utils/UserConxtextProvider';

// const consoleWarn = console.warn;
// const SUPPRESSED_WARNINGS = ['color'];

// console.warn = function filterWarnings(msg, ...args) {
//     if (!SUPPRESSED_WARNINGS.some((entry) => msg.includes(entry))) {
//         consoleWarn(msg, ...args);
//     }
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
