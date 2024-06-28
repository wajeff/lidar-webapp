import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { About } from './components/About/About.jsx';

function App() {
  return (
    <div className ={styles.App}>
      <Navbar/>
      <About/>
    </div>
  )
}

export default App
