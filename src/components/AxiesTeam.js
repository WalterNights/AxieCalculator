import { axiesCards } from '../AxiesCards';
import React, { Component } from 'react';
import './AxiesTeam.css'

import Beast from '../static/axies-type/axie-beast.png';
import Plant from '../static/axies-type/axie-plant.png';
import Bird from '../static/axies-type/axie-bird.png';
import Bug from '../static/axies-type/axie-bug.png';
import Fish from '../static/axies-type/axie-fish.png';
import Reptil from '../static/axies-type/axie-reptil.png';
import Meca from '../static/axies-type/axie-meca.png';
import Dusck from '../static/axies-type/axie-dusck.png';
import Dawn from '../static/axies-type/axie-dawn.png';

const AxiesList = {
    Bestia: Beast,
    Planta: Plant,
    Pajaro: Bird,
    Insecto: Bug,
    Pez: Fish,
    Reptil: Reptil,
    Meca: Meca,
    Dusck: Dusck,
    Dawn: Dawn
}

var sectionSyleA;
var sectionSyleB;
var sectionSyleC;

class AxiesTeam extends Component {
    constructor() {
        super();
        this.state = {
            axieOne: 'Axie Uno',
            axieTwo: 'Axie Dos',
            axieThree: 'Axie Tres',
            axiesCards
        }
        this.handleAxieChosen = this.handleAxieChosen.bind(this)
    }
    handleAxieChosen(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        if (e.target.name === "axieOne") {
            sectionSyleA = { backgroundImage: "url(" + AxiesList[value] + ")" }
        }
        if (e.target.name === "axieTwo") {
            sectionSyleB = { backgroundImage: "url(" + AxiesList[value] + ")" }
        }
        if (e.target.name === "axieThree") {
            sectionSyleC = { backgroundImage: "url(" + AxiesList[value] + ")" }
        }
    }
    render() {
        const axiesCardsLeft = this.state.axiesCards.map((cards, i) => {
            return (
                cards.beast.slice(0, 2).map((card, o) => {
                    return (
                        <div className="cards-right-container" key={o}>
                            <img src={card.card.default} alt="img-mouth-beast"></img>
                        </div>
                    )
                })
            )
        });
        const axiesCardsRight = this.state.axiesCards.map((cards, i) => {
            return (
                cards.beast.slice(2, 4).map((card, o) => {
                    return (
                        <div className="cards-right-container" key={o}>
                            <img src={card.card.default} alt="img-mouth-beast"></img>
                        </div>
                    )
                })
            )
        });
        return (
            <div className="container-axies d-xl-flex justify-content-around  mt-4">
                <section className="cards-left-section d-none d-xl-flex justify-content-evenly align-items-center">
                    {axiesCardsLeft}
                </section>
                <div className="card">
                    <div className="mb-3">
                        <select name="axieOne" className="form-control" defaultValue={"Axie Uno"} ref={this.sateAxiesOne} onChange={this.handleAxieChosen}>
                            <option value="Axie Uno" disabled>Axie Uno</option>
                            <option>Bestia</option>
                            <option>Dawn</option>
                            <option>Dusck</option>
                            <option>Insecto</option>
                            <option>Meca</option>
                            <option>Pajaro</option>
                            <option>Pez</option>
                            <option>Planta</option>
                            <option>Reptil</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select name="axieTwo" className="form-control" defaultValue={"Axie Dos"} ref={this.sateAxiesTwo} onChange={this.handleAxieChosen}>
                            <option value="Axie Dos" disabled>Axie Dos</option>
                            <option value="Bestia">Bestia</option>
                            <option value="Dawn">Dawn</option>
                            <option value="Dusck">Dusck</option>
                            <option value="Insecto">Insecto</option>
                            <option value="Meca">Meca</option>
                            <option value="Pajaro">Pajaro</option>
                            <option value="Pez">Pez</option>
                            <option value="Planta">Planta</option>
                            <option value="Reptil">Reptil</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select name="axieThree" className="form-control" defaultValue={"Axie Tres"} ref={this.sateAxiesThree} onChange={this.handleAxieChosen}>
                            <option value="Axie Tres" disabled>Axie Tres</option>
                            <option>Bestia</option>
                            <option>Dawn</option>
                            <option>Dusck</option>
                            <option>Insecto</option>
                            <option>Meca</option>
                            <option>Pajaro</option>
                            <option>Pez</option>
                            <option>Planta</option>
                            <option>Reptil</option>
                        </select>
                    </div>
                </div>
                <section className="cards-right-section d-none d-xl-flex justify-content-evenly align-items-center">
                    {axiesCardsRight}
                </section>
                <div className="card-axies">
                    <div className="card">
                        <div className="card-header">
                            <h3>{this.state.axieOne}</h3>
                        </div>
                        <div className="card-body">
                            <div className="App-axie axie-first" style={sectionSyleA} />
                        </div>
                        <div className="card-footer d-flex justify-content-around mb-1">
                            <button className="btn">Boca</button>
                            <button className="btn">Cuerno</button>
                            <button className="btn">Espalda</button>
                            <button className="btn">Cola</button>
                        </div>
                    </div>
                </div>
                <div className="card-axies">
                    <div className="card">
                        <div className="card-header">
                            <h3>{this.state.axieTwo}</h3>
                        </div>
                        <div className="card-body">
                            <div className="App-axie axie-second" style={sectionSyleB} />
                        </div>
                        <div className="card-footer d-flex justify-content-around mb-1">
                            <button className="btn">Boca</button>
                            <button className="btn">Cuerno</button>
                            <button className="btn">Espalda</button>
                            <button className="btn">Cola</button>
                        </div>
                    </div>
                </div>
                <div className="card-axies">
                    <div className="card">
                        <div className="card-header">
                            <h3>{this.state.axieThree}</h3>
                        </div>
                        <div className="card-body">
                            <div className="App-axie axie-last" style={sectionSyleC} />
                        </div>
                        <div className="card-footer d-flex justify-content-around mb-1">
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