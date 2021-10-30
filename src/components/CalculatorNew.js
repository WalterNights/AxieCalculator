import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import './Calculator.css';

import energyIcon from '../static/icons/energy.png'
import cardIcon from '../static/icons/card_icon.png'
import deckIcon from '../static/icons/deck_icon.png'

export default function Calculator() {

    const initialState = {
        value: '',
        round: 1,
        energy: 3,
        cards: 6,
        deck: 24,
        win: 0,
        lose: 0,
        percentage: 0,
        ButtonDisableA: false,
        ButtonDisableB: false,
        ButtonDisableC: false
    }

    const [
        {
            value,
            round,
            energy,
            cards,
            deck, 
            win,
            lose,
            percentage,
            ButtonDisableA,
            ButtonDisableB,
            ButtonDisableC
        }, setState] = useState(initialState);


    const handleEnergyMinus = () => {
        if (energy > 0) {
            setState(prevState => ({...prevState, energy: energy - 1}))
        }
    }

    const handleEnergyPlus = () => {
        if (energy < 10) {
            setState(prevState => ({...prevState, energy: energy + 1}))
        }
    }

    const handleCardsMinus = () => {
        if (cards > 0) {
            setState(prevState => ({...prevState, cards: cards - 1}))
        }
    }

    const handleCardsPlus = () => {
        if (cards < 30) {
            setState(prevState => ({...prevState, cards: cards + 1}))
            setState(prevState => ({...prevState, deck: deck - 1}))
        }
    }

    const handleEnergyAndCardMinus = () => {
        if (cards > 0) {
            setState(prevState => ({...prevState, cards: cards - 1}))
        }
        if (energy > 0) {
            setState(prevState => ({...prevState, energy: energy - 1}))
        }
    }

    const handleNextRound = () => {
        if (energy < 10) {
            if (energy === 9) {
                setState(prevState => ({...prevState, energy: energy + 1}))
            } else {
                setState(prevState => ({...prevState, energy: energy + 2}))
            }
        } else {
            setState(prevState => ({...prevState, energy: + 10}))
        }
        if (cards < 30) {
            if (cards === 30) {
                setState(prevState => ({...prevState, cards: cards + 2}))
            } else if (cards === 31) {
                setState(prevState => ({...prevState, cards: cards + 1}))
            } else {
                setState(prevState => ({...prevState, cards: cards + 3}))
            }
        } else {
            setState(prevState => ({...prevState, cards: + 30}))
        }
        setState(prevState => ({...prevState, round: round + 1}))
    }

    const handleNewGame = () => {
        setState({...initialState})
    }

    const handleSuccess = () => {
        setState(prevState => ({...prevState, round: 1}))
        setState(prevState => ({...prevState, energy: 3}))
        setState(prevState => ({...prevState, cards: 6}))
        setState(prevState => ({...prevState, deck: 24}))
        setState(prevState => ({...prevState, win: win + 1}))
        setState(prevState => ({...prevState, ButtonDisableA: false}))
        setState(prevState => ({...prevState, ButtonDisableB: false}))
        setState(prevState => ({...prevState, ButtonDisableC: false}))
    }

    const handleLose = () => {
        setState(prevState => ({...prevState, round: 1}))
        setState(prevState => ({...prevState, energy: 3}))
        setState(prevState => ({...prevState, cards: 6}))
        setState(prevState => ({...prevState, deck: 24}))
        setState(prevState => ({...prevState, lose: lose + 1}))
        setState(prevState => ({...prevState, ButtonDisableA: false}))
        setState(prevState => ({...prevState, ButtonDisableB: false}))
        setState(prevState => ({...prevState, ButtonDisableC: false}))
    }

    /* const handleRemoveAxieA = (e) => {
        setState(prevState => ({...prevState, ButtonDisableA: true}))
        setState(prevState => ({...prevState, deck: deck - 8}))
    }
    const handleRemoveAxieB = (e) => {
        setState(prevState => ({...prevState, ButtonDisableB: true}))
        setState(prevState => ({...prevState, deck: deck - 8}));
    }
    const handleRemoveAxieC = (e) => {
        setState(prevState => ({...prevState, ButtonDisableC: true}))
        setState(prevState => ({...prevState, deck: deck - 8}));
    } */
    
    useEffect(() => {
        const totalPercentage = (win / (win + lose) * 100).toFixed(1)
        const setPercentage = () => setState(prevState => ({...prevState, percentage: totalPercentage}));
        if(lose > 0 || win > 0){
            setPercentage()
        }
    }, [lose, win])

    return (
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="calculator-container col-12 d-flex justify-content-evenly align-items-center">
                <section className="calculator-section">
                    <div className="card">
                        <div className="card-header">
                            <div>
                                <h3>
                                    Ronda <span className="text-warning">{round}</span> -
                                    Energia <img src={energyIcon} alt="energy-icon" /> <span className="text-warning">{energy}/10</span> - 
                                    Cartas <img src={cardIcon} alt="card-icon" /> <span className="text-warning">{cards}</span>
                                </h3>
                            </div>
                            <div>
                                <h3>
                                    Ratio <span className="text-warning">{percentage}%</span> -
                                    <span className="text-warning"> Victorias - {win} / Derrotas - {lose}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-body-content">
                                <h3 className="text-warning">Opciones de la Partida</h3>
                                <div className="d-flex justify-content-between">
                                    <button className="btn" data-tip="Reinica todos los valores por defecto" onClick={handleNewGame}>Nueva Partida</button>
                                    <button className="btn" data-tip="Calcula tu indice de victorias y reinica los valores de rondas y energia" value={value} onClick={handleSuccess}>Victoria</button>
                                    <button className="btn" data-tip="Calcula tu indice de derrotas y reinica los valores de rondas y energia" onClick={handleLose}>Derrota</button>
                                    <ReactTooltip className='extraClass' place={"bottom"} delayHide={100} backgroundColor={"rgba(0, 0, 0)"} textColor={"wheat"} effect='solid' />
                                </div>
                            </div>
                            <div className="card-body-content">
                                <h3 className="text-warning">Opciones de la Ronda</h3>
                                <div className="d-flex justify-content-between">
                                    <button className="btn" onClick={handleEnergyMinus}>- 1 <img src={energyIcon} alt="energy-icon" /></button>
                                    <button className="btn" onClick={handleEnergyPlus}>+ 1 <img src={energyIcon} alt="energy-icon" /></button>
                                    <button className="btn" onClick={handleNextRound}>Siguiente Ronda</button>
                                </div>
                            </div>
                            <div className="card-body-content">
                                <h3 className="text-warning">Opciones de Energias y Cartas</h3>
                                <div className="d-flex justify-content-between mt-2">
                                    <button className="btn" onClick={handleEnergyAndCardMinus}>- 1 <img src={energyIcon} alt="energy-icon" />/<img src={cardIcon} alt="card-icon" /></button>
                                    <button className="btn" onClick={handleCardsMinus}>- 1 <img src={cardIcon} alt="card-icon" /></button>
                                    <button className="btn" onClick={handleCardsPlus}>+ 1 <img src={cardIcon} alt="card-icon" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div>
                                <h3>
                                    Mazo <img src={deckIcon} alt="card-icon" /> <span className="text-warning">{deck}</span>
                                </h3>
                            </div>
                            {/* <div className="card-footer-content">
                                <h3 className="text-warning">Equipo Enemigo</h3>
                                <div className="d-flex justify-content-around align-items-center mt-2">
                                    <button id="A" className="btn" onClick={handleRemoveAxieA} disabled={ButtonDisableA}>Primer Axie</button>
                                    <button id="B" className="btn" onClick={handleRemoveAxieB} disabled={ButtonDisableB}>Segundo Axie</button>
                                    <button id="C" className="btn" onClick={handleRemoveAxieC} disabled={ButtonDisableC}>Tercer Axie</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}