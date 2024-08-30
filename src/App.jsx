import './App.css'
import AboutMe from './components/AboutMe'
import InitialScreen from './components/InitialScreen'
import NavBar from './components/NavBar'
function App() {

  return (
    <main className='font-sans bg-background text-text-primary'>
      <NavBar />
      
      <InitialScreen />
      <AboutMe />
    </main>
  )
}

export default App
