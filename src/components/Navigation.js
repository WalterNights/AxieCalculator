import React, { useState, useEffect, useRef } from 'react';

import './Navigation.css';
import AppLogo from '../static/icons/axie_calculator_logo.png'

export default function Navigation() {

    return (
        <section className="container-nav col-12 d-flex justify-content-center">
            <nav className="col-11 col-xxl-10 d-flex justify-content-center align-items-center text-center">
                <div className="col-4 d-flex justify-content-start align-items-center">
                    <img src={AppLogo} className="me-2 d-none" alt="app-logo" />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <h1 className="nav-title">Axie Calculator</h1>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <span className="d-none">WalterNightsDev</span>
                </div>
                {/* <div className="col-xxl-4">
                        <ul className="d-flex col-12 justify-content-between align-items-center mb-0">
                            <li><a href="/">Guías y Ayudas</a></li>
                            <li><a href="/">Contactanos</a></li>
                            <li><a href="/">Ma información</a></li>
                        </ul>
                    </div>
                    <div className="col-xxl-4">
                        <p>WalterNightsDev</p>
                    </div> */}
            </nav>
        </section>
    );
}