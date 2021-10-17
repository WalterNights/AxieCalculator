import React, { Component } from 'react';
import axie from '../static/axie-plant.png'
import './AxiesTeam.css'

class AxiesTeam extends Component {
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
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>Bestia</h3>
                        </div>
                        <div className="card-body">
                            <div className="App-axie axie-second"/>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default AxiesTeam;