import { useEffect } from 'react';

import Aos from 'aos';

import './App.css';

import Header from './components/Header/Hearder';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div>
      <Header></Header>
      <main><Hero></Hero>

        <Services></Services>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
