import './App.css';

import Navigation from './components/Navigation'
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <div className="style_gradient"></div>
      <div className="style_cloudRing"></div>
      <div className="container col-12 d-flex justify-content-center mt-4">
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
