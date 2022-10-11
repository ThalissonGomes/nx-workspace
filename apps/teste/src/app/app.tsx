import styles from './app.module.css';
import { useMediaQuery } from 'react-responsive';
import Index from './pages/index';
export function App() {
  return (
    <div className="App">
      <header className="header">
        <Index />
      </header>
    </div>
  );
}

export default App;
