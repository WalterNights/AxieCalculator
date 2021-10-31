import './App.css';

import Navigation from './components/Navigation'
//import Calculator from './components/Calculator'
import CalculatorNew from './components/CalculatorNew'


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div className="col-12 d-flex justify-content-center">
        {/* <Calculator /> */}
        <CalculatorNew/>
      </div>
    </div>
  )
}
