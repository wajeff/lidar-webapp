import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { About } from './components/About/About.jsx';
import { Animation } from './components/Animation/Animation.jsx';

function App() {
  return (
    <div className ={styles.App}>
      <Navbar/>
      <About/>
      <Animation/>
    </div>
  )
}

export default App
