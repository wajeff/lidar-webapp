import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { About } from './components/About/About.jsx';
import { Animation } from './components/Animation/Animation.jsx';
import { Hero } from './components/Hero/Hero.jsx';

function App() {
  return (
    <div className ={styles.App}>
      <Navbar/>
      <Hero>
        <About/>
        <Animation/> 
      </Hero>
      
      {/* <Hero>
        <About/>
        <Animation/> 
      </Hero> */}
      
      {/* <Navbar/> */}
      
      
      
      
    </div>
  )
}

export default App
