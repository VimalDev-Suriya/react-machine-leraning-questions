import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserInputDebounce from './components/Debounce/UserInputDebounce';
import TicTacToe from './components/TicTacToe/TicTacToe';
import ToastContainer from './components/Toast/ToastContainer';
import ToastProvider from './components/Toast/ToastProvider';

function App() {
  return (
    <div className="container">
      <ToastProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TicTacToe/>} />
            <Route path="/user-input" element={<UserInputDebounce />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </div>
  );
}

export default App;
