import logo from './logo.svg';
import './App.css';
import Parrafo from './complementos/parrafo';
import img from "./images/imgReact.jpg";
import Btn from './complementos/otro';
import img2 from './images/img.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi primer react</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={img} ></img>
        <img src={img2} ></img> <br></br>  
        <Btn/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Parrafo/>
        </p>
        <button type='button' className='App-Logo'>Boton de Envio</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
