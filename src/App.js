

import './App.css';

import Galery from './components/Galery';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header title="Galeria Imagenes React"/> 
      <Galery />
      <Footer content="Created by Pame Canales" />
    </div>
  );
}

export default App;
