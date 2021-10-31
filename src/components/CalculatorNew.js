import React, { useState, useEffect } from 'react';

import './Calculator.css';

import energyIcon from '../static/icons/energy.png'
import cardIcon from '../static/icons/card_icon.png'
import deckIcon from '../static/icons/deck_icon.png'
import usedCard from '../static/icons/used_cards.png'

export default function Calculator() {

    const initialState = {
        round: 1,
        energy: 3,
        cards: 6,
        deck: 24,
        usedCards: 0,
        win: 0,
        lose: 0,
        percentage: 0,
        ButtonDisableA: false,
        ButtonDisableB: false,
        ButtonDisableC: false
    }

    const [
        {
            round,
            energy,
            cards,
            deck,
            usedCards,
            win,
            lose,
            percentage,
        }, setState] = useState(initialState);

    const [style, setStyle] = useState({ display: 'none' });
    const [styleAdvance, setStyleAdvance] = useState({ display: 'flex' });
    const [styleSimple, setStyleSimple] = useState({ display: 'none' });
    const [infoText, setInfoText] = useState();
    const [buttonText, setButtonText] = useState('Calculadora Simple');

    const infoTextNewGame = 'Reinica todos los valores por defecto';
    const infoTextVictory = 'Calcula tu indice de victorias y reinica los valores de rondas y energia';
    const infoTextDefeat = 'Calcula tu indice de derrotas y reinica los valores de rondas y energia';


    const handleEnergyMinus = () => {
        if (energy > 0) {
            setState(prevState => ({ ...prevState, energy: energy - 1 }))
        }
    }

    const handleEnergyPlus = () => {
        if (energy < 10) {
            setState(prevState => ({ ...prevState, energy: energy + 1 }))
        }
    }

    const handleCardsMinus = () => {
        if (cards > 0) {
            setState(prevState => ({ ...prevState, cards: cards - 1 }))
        }
        setState(prevState => ({ ...prevState, usedCards: usedCards + 1 }))
    }

    const handleCardsPlus = () => {
        if (cards < 30) {
            setState(prevState => ({ ...prevState, cards: cards + 1 }))
            setState(prevState => ({ ...prevState, deck: deck - 1 }))
        }
    }

    const handleEnergyAndCardMinus = () => {
        if (cards > 0) {
            setState(prevState => ({ ...prevState, cards: cards - 1 }))
        }
        if (energy > 0) {
            setState(prevState => ({ ...prevState, energy: energy - 1 }))
        }
        setState(prevState => ({ ...prevState, usedCards: usedCards + 1 }))
    }

    const handleNextRound = () => {
        if (energy < 10) {
            if (energy === 9) {
                setState(prevState => ({ ...prevState, energy: energy + 1 }))
            } else {
                setState(prevState => ({ ...prevState, energy: energy + 2 }))
            }
        } else {
            setState(prevState => ({ ...prevState, energy: + 10 }))
        }
        if (cards < 30) {
            if (cards === 30) {
                setState(prevState => ({ ...prevState, cards: cards + 2 }))
            } else if (cards === 31) {
                setState(prevState => ({ ...prevState, cards: cards + 1 }))
            } else {
                setState(prevState => ({ ...prevState, cards: cards + 3 }))
            }
        } else {
            setState(prevState => ({ ...prevState, cards: + 30 }))
        }
        setState(prevState => ({ ...prevState, round: round + 1 }))
        if (deck <= 0) {
            setState(prevState => ({ ...prevState, deck: deck + usedCards }))
            setState(prevState => ({ ...prevState, usedCards: 0 }))
        } else {
            if (round === 1) {
                setState(prevState => ({ ...prevState, deck: deck - 6 }))
            } else {
                setState(prevState => ({ ...prevState, deck: deck - 3 }))
            }
        }
    }

    const handleNewGame = () => {
        setState({ ...initialState })
    }

    const handleSuccess = () => {
        setState(prevState => ({ ...prevState, round: 1 }))
        setState(prevState => ({ ...prevState, energy: 3 }))
        setState(prevState => ({ ...prevState, cards: 6 }))
        setState(prevState => ({ ...prevState, deck: 24 }))
        setState(prevState => ({ ...prevState, win: win + 1 }))
        setState(prevState => ({ ...prevState, ButtonDisableA: false }))
        setState(prevState => ({ ...prevState, ButtonDisableB: false }))
        setState(prevState => ({ ...prevState, ButtonDisableC: false }))
    }

    const handleLose = () => {
        setState(prevState => ({ ...prevState, round: 1 }))
        setState(prevState => ({ ...prevState, energy: 3 }))
        setState(prevState => ({ ...prevState, cards: 6 }))
        setState(prevState => ({ ...prevState, deck: 24 }))
        setState(prevState => ({ ...prevState, lose: lose + 1 }))
        setState(prevState => ({ ...prevState, ButtonDisableA: false }))
        setState(prevState => ({ ...prevState, ButtonDisableB: false }))
        setState(prevState => ({ ...prevState, ButtonDisableC: false }))
    }

    useEffect(() => {
        const totalPercentage = (win / (win + lose) * 100).toFixed(1)
        const setPercentage = () => setState(prevState => ({ ...prevState, percentage: totalPercentage }));
        if (lose > 0 || win > 0) {
            setPercentage()
        }
    }, [lose, win])

    return (
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <section className="text-dexcription col-12 d-flex justify-content-center align-items-center">
                <div className="calculator-info col-12" style={style}>
                    <span className="">{infoText}</span>
                </div>
            </section>
            <section className="calculator-container col-12 d-flex justify-content-evenly align-items-center">
                <div className="calculator-section">
                    <div className="card">
                        <div className="calculator-button-advance">
                            <button className="col-12" onClick={e => {
                                console.log(styleAdvance.display)
                                if (styleAdvance.display === 'flex') {
                                    setStyleAdvance({ display: 'none' })
                                    setStyleSimple({ display: 'flex' })
                                    setButtonText('Calculadora Avanzada')
                                } else {
                                    setStyleAdvance({ display: 'flex' })
                                    setStyleSimple({ display: 'none' })
                                    setButtonText('Calculadora Simple')
                                }
                            }}
                            >
                                {buttonText}
                            </button>
                        </div>
                        <div className="card-header">
                            <div className="calculator-header">
                                <h3>
                                    Ronda <span className="text-warning">{round}</span> -
                                    Energia <img src={energyIcon} alt="energy-icon" /> <span className="text-warning">{energy}/10</span> -
                                    Cartas <img src={cardIcon} alt="card-icon" /> <span className="text-warning">{cards}</span>
                                </h3>
                            </div>
                            <div className="justify-content-center" style={styleAdvance}>
                                <h3>
                                    Ratio <span className="text-warning">{percentage}%</span> -
                                    <span className="text-warning"> Victorias - {win} / Derrotas - {lose}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-body-content card-body-simple" style={styleSimple}>
                                <div className="d-flex justify-content-center">
                                    <button
                                        className="btn btn-simple"
                                        onClick={handleNewGame}
                                        onMouseEnter={e => {
                                            setStyle({ display: 'block' })
                                            setInfoText(infoTextNewGame)
                                        }} onMouseLeave={e => { setStyle({ display: 'none' }) }}
                                    >
                                        Nueva Partida
                                    </button>
                                </div>
                            </div>
                            <div className="card-body-content" style={styleAdvance}>
                                <h3 className="text-warning">Opciones de la Partida</h3>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn"
                                        onClick={handleNewGame}
                                        onMouseEnter={e => {
                                            setStyle({ display: 'block' })
                                            setInfoText(infoTextNewGame)
                                        }} onMouseLeave={e => { setStyle({ display: 'none' }) }}
                                    >
                                        Nueva Partida
                                    </button>
                                    <button
                                        className="btn"
                                        onClick={handleSuccess}
                                        onMouseEnter={e => {
                                            setStyle({ display: 'block' })
                                            setInfoText(infoTextVictory)
                                        }} onMouseLeave={e => { setStyle({ display: 'none' }) }}
                                    >
                                        Victoria
                                    </button>
                                    <button className="btn"
                                        onClick={handleLose}
                                        onMouseEnter={e => {
                                            setStyle({ display: 'block' })
                                            setInfoText(infoTextDefeat)
                                        }} onMouseLeave={e => { setStyle({ display: 'none' }) }}
                                    >
                                        Derrota
                                    </button>
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
                            <div className="card-body-content" style={styleAdvance}>
                                <h3 className="text-warning">Opciones de Energias y Cartas</h3>
                                <div className="d-flex justify-content-between mt-2">
                                    <button className="btn" onClick={handleEnergyAndCardMinus}>- 1 <img src={energyIcon} alt="energy-icon" />/<img src={cardIcon} alt="card-icon" /></button>
                                    <button className="btn" onClick={handleCardsMinus}>- 1 <img src={cardIcon} alt="card-icon" /></button>
                                    <button className="btn" onClick={handleCardsPlus}>+ 1 <img src={cardIcon} alt="card-icon" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="justify-content-center" style={styleAdvance}>
                                <h3>
                                    Cartas en el Mazo <img src={deckIcon} alt="card-icon" /> <span className="text-warning">{deck}</span> /
                                    Cartas Usadas <img src={usedCard} alt="card-icon" /> <span className="text-warning">{usedCards}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}