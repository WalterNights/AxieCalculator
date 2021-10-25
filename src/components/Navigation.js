import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render(){
        return(
            <section className="container-nav col-12 d-flex justify-content-center">
                <nav className="col-11 col-xxl-8 text-center d-flex justify-content-between align-items-center mb-3 mb-md-2">
                    <p className="">Guías y Ayudas</p>
                    <h1 className="nav-title">Calculadora Axies V 1.0.0</h1>
                    <p className="">WalterNights Dev</p>
                </nav>
            </section>
        );
    }
}

export default Navigation;