import './App.css';

import Navigation from './components/Navigation'
import Calculator from './components/Calculator'
//import AxiesTeam from './components/AxiesTeam'


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className="col-12 d-flex justify-content-center mt-4">
        <Calculator />
      </div>
    </div>
  )
}
