import React, { Component } from 'react';

import './Calculator.css';

import energyIcon from '../static/icons/energy.png'
import cardIcon from '../static/icons/card_icon.png'
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.sateAxiesOne = React.createRef();
        this.sateAxiesTwo = React.createRef();
        this.sateAxiesThree = React.createRef();
        this.state = {
            round: 1,
            energy: 3,
            cards: 6,
            win: 0,
            lose: 0,
            percentage: 0
        }
        this.handleEnergyMinus = this.handleEnergyMinus.bind(this)
        this.handleEnergyPlus = this.handleEnergyPlus.bind(this)
        this.handleNextRound = this.handleNextRound.bind(this)
        this.handleNewGame = this.handleNewGame.bind(this)
        this.handleCardsMinus = this.handleCardsMinus.bind(this)
        this.handleCardsPlus = this.handleCardsPlus.bind(this)
        this.handleEnergyAndCardMinus = this.handleEnergyAndCardMinus.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
        this.handleLose = this.handleLose.bind(this)
    }
    handleEnergyMinus() {
        const energy = this.state.energy;
        const energyMinus = this.state.energy - 1
        if (energy > 0) {
            this.setState({
                energy: + energyMinus
            })
        }
    }
    handleEnergyPlus() {
        const energy = this.state.energy;
        const energyPlus = this.state.energy + 1
        if (energy < 10) {
            this.setState({
                energy: + energyPlus
            })
        }
    }
    handleCardsMinus() {
        const cards = this.state.cards;
        const cardsMinus = this.state.cards - 1
        if (cards > 0) {
            this.setState({
                cards: + cardsMinus
            })
        }
    }
    handleCardsPlus() {
        const cards = this.state.cards;
        const cardsPlus = this.state.cards + 1
        if (cards < 32) {
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
        if (cards > 0) {
            this.setState({
                cards: + cardsMinus
            })
        }
        if (energy > 0) {
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
        if (energy < 10) {
            if (energy === 9) {
                nextEnergy = this.state.energy + 1
            } else {
                nextEnergy = this.state.energy + 2
            }
        } else {
            nextEnergy = 10
        }
        if (cards < 32) {
            if (cards === 30) {
                nextCards = this.state.cards + 2
            } else if (cards === 31) {
                nextCards = this.state.cards + 1
            } else {
                nextCards = this.state.cards + 3
            }
        } else {
            nextCards = 32
        }
        this.setState({
            round: + nextRound,
            energy: + nextEnergy,
            cards: + nextCards
        })
    }
    handleNewGame() {
        const newtRound = 1
        const newtEnergy = 3
        const newtCards = 6
        const newtWin = 0
        const newtLose = 0
        const newtPercentage = 0
        this.setState({
            round: + newtRound,
            energy: + newtEnergy,
            cards: + newtCards,
            win: + newtWin,
            lose: + newtLose,
            percentage: + newtPercentage,
        })
    }
    handleSuccess(e) {
        const nextRound = 1
        const nextEnergy = 3
        const nextCards = 6
        const winRound = this.state.win + 1
        this.setState({
            win: + winRound,
            round: + nextRound,
            energy: + nextEnergy,
            cards: + nextCards

        })
    }
    handleLose(e) {
        const nextRound = 1
        const nextEnergy = 3
        const nextCards = 6
        const loseRound = this.state.lose + 1
        this.setState({
            round: + nextRound,
            energy: + nextEnergy,
            cards: + nextCards,
            lose: + loseRound,
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const totalPercentage = (this.state.win / (this.state.win + this.state.lose) * 100).toFixed(1)
        if (prevState.lose < this.state.lose || prevState.win < this.state.win) {
            this.setState({
                percentage: + totalPercentage
            })
        }
    }
    render() {
        return (
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <div className="calculator-container col-12 d-flex justify-content-evenly align-items-center">
                    <section className="calculator-section">
                        <div className="card">
                            <div className="card-header">
                                <div>
                                    <h3>
                                        Ronda <span className="text-warning">{this.state.round}</span> -
                                        Energia <img src={energyIcon} alt="energy-icon" /> <span className="text-warning">{this.state.energy}/10</span> -
                                        Cartas <img src={cardIcon} alt="card-icon" /> <span className="text-warning">{this.state.cards}</span>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        Ratio <span className="text-warning">{this.state.percentage}%</span> -
                                        <span className="text-warning"> Victorias - {this.state.win} / Derrotas - {this.state.lose}</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <button className="btn" onClick={this.handleNewGame}>Nueva Partida</button>
                                    <button className="btn" onClick={this.handleNextRound}>Siguiente Ronda</button>
                                    <button className="btn" onClick={this.handleSuccess}>Victoria</button>
                                    <button className="btn" onClick={this.handleLose}>Derrota</button>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <button className="btn" onClick={this.handleEnergyMinus}>- 1 <img src={energyIcon} alt="energy-icon" /></button>
                                    <button className="btn" onClick={this.handleEnergyPlus}>+ 1 <img src={energyIcon} alt="energy-icon" /></button>
                                    <button className="btn" onClick={this.handleEnergyAndCardMinus}>- 1 <img src={energyIcon} alt="energy-icon" />/<img src={cardIcon} alt="card-icon" /></button>
                                    <button className="btn" onClick={this.handleCardsMinus}>- 1 <img src={cardIcon} alt="card-icon" /></button>
                                    <button className="btn" onClick={this.handleCardsPlus}>+ 1 <img src={cardIcon} alt="card-icon" /></button>
                                </div>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}