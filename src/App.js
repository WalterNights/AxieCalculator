import './App.css';

import Navigation from './components/Navigation'
import CalculatorNew from './components/CalculatorNew'


export default function App() {
  return (
    <div className="App">
      <div className="col-12 d-flex justify-content-center">
        <CalculatorNew/>
      </div>
      <header className="App-header d-none">
        <Navigation />
      </header>
    </div>
  )
}
