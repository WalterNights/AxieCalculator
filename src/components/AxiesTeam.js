import React, { Component } from 'react';
import './AxiesTeam.css'

//import Plant from '../static/axie-plant.png';
import Beast from '../static/axie-beast.png';
//import Bird from '../static/axie-bird.png';

const sectionSyle = {
    backgroundImage: "url(" + Beast + ")"
};

class AxiesTeam extends Component {
    constructor(){
        super();
        this.state = {
            AxieOne: '',
            AxieTwo: '',
            AxieThree: ''
        }
    }
    render() {
        return (
            <div className="container-axies d-flex justify-content-around mt-5">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>Planta</h3>
                        </div>
                        <div className="card-body">
                            <div className="App-axie axie-first"/>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <button className="btn">Boca</button>
                            <button className="btn">Cuerno</button>
                            <button className="btn">Espalda</button>
                            <button className="btn">Cola</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>Bestia</h3>
                        </div>
                        <div className="card-body">
                            <div className="App-axie axie-second" style={sectionSyle}/>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <button className="btn">Boca</button>
                            <button className="btn">Cuerno</button>
                            <button className="btn">Espalda</button>
                            <button className="btn">Cola</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>Pajaro</h3>
                        </div>
                        <div className="card-body">
                            <div className="App-axie axie-last"/>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <button className="btn">Boca</button>
                            <button className="btn">Cuerno</button>
                            <button className="btn">Espalda</button>
                            <button className="btn">Cola</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AxiesTeam;