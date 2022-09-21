import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import styles from './App.module.css';
import { EnvProvider } from './services/EnvContext';
import { Home } from './pages/Home';
import { OverhaulIframe } from './pages/OverhaulIframe';

function App() {
  return (
    <EnvProvider>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/overhaul' element={<OverhaulIframe />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </EnvProvider>
  );
}

export default App;
