import './App.css'
import AboutMe from './components/AboutMe'
import InitialScreen from './components/InitialScreen'
import MyProjects from './components/MyProjects'
import MySkills from './components/MySkills'
import NavBar from './components/NavBar'
import NavLink from './components/NavLink'
function App() {

  return (
    <main className='relative w-full font-sans bg-background text-text-primary flex flex-col space-y-52 '>
      <NavBar />
       <NavLink /> 
      <InitialScreen />
      <AboutMe />
      <MySkills />
      <MyProjects />
    </main>
  )
}

export default App
