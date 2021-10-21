import React, { Component } from 'react';
import { axiesCards } from '../AxiesCards';

import './Calculator.css';
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
export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.sateAxiesOne = React.createRef();
        this.sateAxiesTwo = React.createRef();
        this.sateAxiesThree = React.createRef();
        this.state = {
            round: 1,
            energy: 3,
            cards: 6,
            axieOne: 'Axie Uno',
            axieTwo: 'Axie Dos',
            axieThree: 'Axie Tres',
            axiesCards
        }
        this.handleEnergyMinus = this.handleEnergyMinus.bind(this)
        this.handleEnergyPlus = this.handleEnergyPlus.bind(this)
        this.handleNextRound = this.handleNextRound.bind(this)
        this.handleNewRound = this.handleNewRound.bind(this)
        this.handleAxieChosen = this.handleAxieChosen.bind(this)
        this.handleCardsMinus = this.handleCardsMinus.bind(this)
        this.handleCardsPlus = this.handleCardsPlus.bind(this)
        this.handleEnergyAndCardMinus = this.handleEnergyAndCardMinus.bind(this)
    }
    handleEnergyMinus() {
        const energy = this.state.energy;
        const energyMinus = this.state.energy - 1
        if(energy > 0){
            this.setState({
                energy: + energyMinus
            })
        }
    }
    handleEnergyPlus() {
        const energy = this.state.energy;
        const energyPlus = this.state.energy + 1
        if(energy < 10){
            this.setState({
                energy: + energyPlus
            })
        }
    }
    handleCardsMinus() {
        const cards = this.state.cards;
        const cardsMinus = this.state.cards - 1
        if(cards > 0){
            this.setState({
                cards: + cardsMinus
            })
        }
    }
    handleCardsPlus() {
        const cards = this.state.cards;
        const cardsPlus = this.state.cards + 1
        if(cards < 32){
            this.setState({
                cards: + cardsPlus
            })
        }
    }
    handleEnergyAndCardMinus() {
        const cards = this.state.cards;
        const energy = this.state.energy;
        const cardsMinus = this.state.cards - 1
        const energyMinus = this.state.energy - 1
        if(cards > 0){
            this.setState({
                cards: + cardsMinus
            })
        }
        if(energy > 0){
            this.setState({
                energy: + energyMinus
            })
        }
    }
    handleNextRound() {
        const energy = this.state.energy;
        const cards = this.state.cards;
        const nextRound = this.state.round + 1
        let nextCards;
        let nextEnergy;
        if(energy < 10){
            if(energy === 9){
                nextEnergy = this.state.energy + 1
            }else{
                nextEnergy = this.state.energy + 2
            }
        }else{
            nextEnergy = 10
        }
        if(cards < 32){
            if(cards === 30){
                nextCards = this.state.cards + 2
            }else if(cards === 31){
                nextCards = this.state.cards + 1
            }else{
                nextCards = this.state.cards + 3
            }
        }else{
            nextCards = 32
        }
        this.setState({
            round: + nextRound,
            energy: + nextEnergy,
            cards: + nextCards
        })
    }
    handleNewRound() {
        const nextRound = 1
        const nextEnergy = 3
        const nextCards = 6
        this.setState({
            round: + nextRound,
            energy: + nextEnergy,
            cards: + nextCards
        })
    }
    handleAxieChosen(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
        if(e.target.name === "axieOne"){
            sectionSyleA = {backgroundImage: "url(" + AxiesList[value] + ")"}
        }
        if(e.target.name === "axieTwo"){
            sectionSyleB = {backgroundImage: "url(" + AxiesList[value] + ")"}
        }
        if(e.target.name === "axieThree"){
            sectionSyleC = {backgroundImage: "url(" + AxiesList[value] + ")"}
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
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <div className="calculator-container col-12 d-flex justify-content-evenly align-items-center">
                    <section className="cards-left-section d-none d-xl-flex justify-content-evenly align-items-center">
                        {axiesCardsLeft}
                    </section>
                    <section className="calculator-section">
                        <div className="card">
                            <div className="card-header">
                                <div className="">
                                    <h3>
                                        Ronda <span className="text-warning">{this.state.round}</span> -
                                        Energia <span className="text-warning">{this.state.energy}/10</span> -
                                        Cartas <span className="text-warning">{this.state.cards}</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <button className="btn" onClick={this.handleEnergyMinus}>- 1</button>
                                    <button className="btn" onClick={this.handleEnergyPlus}>+ 1</button>
                                    <button className="btn" onClick={this.handleNextRound}>Siguiente Ronda</button>
                                    <button className="btn" onClick={this.handleNewRound}>Nueva Ronda</button>
                                </div>
                                <div className="d-flex justify-content-evenly mt-2">
                                    <button className="btn" onClick={this.handleEnergyAndCardMinus}>- 1 Energia/Carta</button>
                                    <button className="btn" onClick={this.handleCardsMinus}>- 1 Carta</button>
                                    <button className="btn" onClick={this.handleCardsPlus}>+ 1 Carta</button>
                                </div>
                            </div>
                            <div className="card-footer">
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
                        </div>
                    </section>
                    <section className="cards-right-section d-none d-xl-flex justify-content-evenly align-items-center">
                        {axiesCardsRight}
                    </section>
                </div>
                <div className="container-axies d-xl-flex justify-content-around  mt-5">
                    <div className="card-axies">
                        <div className="card">
                            <div className="card-header">
                                <h3>{this.state.axieOne}</h3>
                            </div>
                            <div className="card-body">
                                <div className="App-axie axie-first" style={sectionSyleA}/>
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
                                <div className="App-axie axie-second" style={sectionSyleB}/>
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
                                <div className="App-axie axie-last" style={sectionSyleC}/>
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
            </div>
        );
    }
}