import './App.css';
import Contact from './Components/Contact/Contact';
//import Education from './Components/Education/Education';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skc from './Components/SkillsAndCertifications/Skc';
function App() {
  return (
   <>
    <Hero/>
    {/* <Education/> */}
    <Skc/>
    <Projects/>
    <Contact/>
   </>
  );
}
export default App;
