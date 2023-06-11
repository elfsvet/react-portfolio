import './App.css';
import Particles from './components/Particles';
import AboutMe from './components/aboutMe/AboutMe';
import Technologies from './components/technologies/Technologies';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import ContactForm from './components/contactForm/ContactForm';
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import NavigationBar from './components/navigationBar/NavigationBar';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <HashRouter //BrowserRouter basename={window.location.pathname}
    >
      <main className='App'>
        <NavigationBar />
        <div>
          <Routes>
            <Route path='/' element={<Particles />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/technologies' element={<Technologies />} />
            <Route path='/contacts' element={<ContactForm />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
