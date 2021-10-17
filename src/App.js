import './App.css';

import Navigation from './components/Navigation'
import Calculator from './components/Calculator'
import AxiesTeam from './components/AxiesTeam'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <div className="container col-12 d-flex justify-content-center mt-4">
        <Calculator/>
      </div>
      <div className="">
        <AxiesTeam/>
      </div>
    </div>
  );
}

export default App;
