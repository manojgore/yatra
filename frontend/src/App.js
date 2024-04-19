import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Fleet from './components/Fleet';
import Footer from './components/Footer';
import BrowseByType from './components/BrowseByType';

function App() {
  return (
    <>
    <Navbar /> 
    <Banner />
    <BrowseByType /> 
    <Fleet />
    <Footer />
    </>
  );
}

export default App;
