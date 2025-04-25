import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import About from './components/about/About';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
