import TicTacToe from './components/TicTacToe/TicTacToe';
import ToastContainer from './components/Toast/ToastContainer';
import ToastProvider from './components/Toast/ToastProvider';

function App() {
  return (
    <ToastProvider>
      <div className="container">
        <TicTacToe />
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

export default App;
