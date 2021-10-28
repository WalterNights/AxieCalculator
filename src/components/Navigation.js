import React, { Component } from 'react';
import './Navigation.css';
import AppLogo from '../static/icons/axie_calculator_logo.png'

class Navigation extends Component {
    render() {
        return (
            <section className="container-nav col-12 d-flex justify-content-center">
                <nav className="col-11 col-xxl-10 d-flex justify-content-center align-items-center text-center">
                    <div className="col-xxl-4 d-flex justify-content-center align-items-center">
                        <img src={AppLogo} className="me-2" alt="app-logo" />
                        <h1 className="nav-title">Axie Calculator</h1>
                    </div>
                    <div className="col-xxl-4">
                        <ul className="d-flex col-12 justify-content-between align-items-center mb-0">
                            <li><a href="/">Guías y Ayudas</a></li>
                            <li><a href="/">Contactanos</a></li>
                            <li><a href="/">Ma información</a></li>
                        </ul>
                    </div>
                    <div className="col-xxl-4">
                        <p>WalterNightsDev</p>
                    </div>
                </nav>
            </section>
        );
    }
}

export default Navigation;