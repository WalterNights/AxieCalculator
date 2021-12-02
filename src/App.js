import './App.css';

import { Outlet, Link } from "react-router-dom";

import Navigation from './components/Navigation'
import CalculatorNew from './components/CalculatorNew'


export default function App() {
	return (
		<div className="App">
			<Outlet />
			<div className="col-12 d-flex justify-content-center">
				<CalculatorNew />
			</div>
			<nav>
				<Link to="/invoices">Inoices</Link> |{"  "}
				<Link to="/expenses">Eexpenses</Link>
			</nav>
			<header className="App-header d-none">
				<Navigation />
			</header>
		</div>
	)
}
