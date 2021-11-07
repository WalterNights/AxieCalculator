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
        draw: 0,
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
            draw,
            percentage,
        }, setState] = useState(initialState);

    const [style, setStyle] = useState({ display: 'none' });
    const [styleAdvance, setStyleAdvance] = useState({ display: 'none' });
    const [styleBackgroundS, setStyleBackgroundS] = useState({ backgroundColor: '#a59577' });
    const [styleBackgroundA, setStyleBackgroundA] = useState({ backgroundColor: 'wheat' });
    const [infoText, setInfoText] = useState();

    const infoTextChangeAdvance = 'Presiona para ir a la version avanzada de la calculadora';
    const infoTextChangeSimple = 'Presiona para ir a la version simple de la calculadora';
    const infoTextNewGame = 'Reinica todos los valores por defecto';
    const infoTextVictory = 'Calcula tu indice de victorias y reinica los valores de rondas y energia';
    const infoTextDefeat = 'Calcula tu indice de derrotas y reinica los valores de rondas y energia';
    const infoTextDraw = 'Suma los empates y reinicia los valores de ronda y energia';
    const infoTextBackRound = 'Devuelve una ronda y resta 2 de energia';


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

    const handleEnergyPlusCardMinus = () => {
        if (cards > 0) {
            setState(prevState => ({ ...prevState, cards: cards - 1 }))
        }
        if (energy > 0) {
            setState(prevState => ({ ...prevState, energy: energy + 1 }))
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

    const handlePreviwsRound = () => {
        if (round !== 1) {
            if (energy >= 2) {
                setState(prevState => ({ ...prevState, energy: energy - 2 }))
            }
            setState(prevState => ({ ...prevState, round: round - 1 }))
            setState(prevState => ({ ...prevState, cards: cards - 2 }))
            setState(prevState => ({ ...prevState, deck: deck + 3 }))
        }
        if (round === 2 && energy === 0) {
            setState(prevState => ({ ...prevState, round: 1 }))
            setState(prevState => ({ ...prevState, energy: 3 }))
            setState(prevState => ({ ...prevState, cards: 6 }))
            setState(prevState => ({ ...prevState, deck: 24 }))
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
        setState(prevState => ({ ...prevState, usedCards: 0 }))
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
        setState(prevState => ({ ...prevState, usedCards: 0 }))
        setState(prevState => ({ ...prevState, lose: lose + 1 }))
        setState(prevState => ({ ...prevState, ButtonDisableA: false }))
        setState(prevState => ({ ...prevState, ButtonDisableB: false }))
        setState(prevState => ({ ...prevState, ButtonDisableC: false }))
    }

    const handleDraw = () => {
        setState(prevState => ({ ...prevState, round: 1 }))
        setState(prevState => ({ ...prevState, energy: 3 }))
        setState(prevState => ({ ...prevState, cards: 6 }))
        setState(prevState => ({ ...prevState, deck: 24 }))
        setState(prevState => ({ ...prevState, usedCards: 0 }))
        setState(prevState => ({ ...prevState, draw: draw + 1 }))
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

    const handleChangeCalculatorSimple = () => {
        setStyleAdvance({ display: 'none' })
        setStyleBackgroundS({ backgroundColor: '#a59577' })
        setStyleBackgroundA({ backgroundColor: 'wheat' })
    }

    const handleChangeCalculatorAdvance = () => {
        setStyleAdvance({ display: 'flex' })
        setStyleBackgroundS({ backgroundColor: 'wheat' })
        setStyleBackgroundA({ backgroundColor: '#a59577' })
    }

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
                            <button
                                className="col-5 change-simpe"
                                style={styleBackgroundS}
                                onClick={handleChangeCalculatorSimple}
                                onMouseEnter={e => {
                                    setStyle({ display: 'block' })
                                    setInfoText(infoTextChangeSimple)
                                }} onMouseLeave={e => { setStyle({ display: 'none' }) }}
                            >
                                Calculator Simple
                            </button>
                            <button
                                className="col-5 change-advance"
                                style={styleBackgroundA}
                                onClick={handleChangeCalculatorAdvance}
                                onMouseEnter={e => {
                                    setStyle({ display: 'block' })
                                    setInfoText(infoTextChangeAdvance)
                                }} onMouseLeave={e => { setStyle({ display: 'none' }) }}
                            >
                                Calculadora Avanzada
                            </button>
                        </div>
                        <div className="card-header">
                            <div className="calculator-header">
                                <h3 className="d-flex justify-content-center align-items-center">
                                    <button
                                        className="round-back position-absolute"
                                        onClick={handlePreviwsRound}
                                        onMouseEnter={e => {
                                            setStyle({ display: 'block' })
                                            setInfoText(infoTextBackRound)
                                        }} onMouseLeave={e => { setStyle({ display: 'none' }) }}
                                    >
                                        <i className="material-icons mdi mdi-reply">reply</i>
                                    </button>
                                    Ronda &nbsp;<span className="text-warning">{round}</span>&nbsp;-&nbsp;
                                    Energia &nbsp;<img src={energyIcon} alt="energy-icon" />&nbsp;<span className="text-warning">{energy}/10</span>&nbsp;
                                    <span style={styleAdvance}>
                                        - Cartas &nbsp;<img src={cardIcon} alt="card-icon" />&nbsp;<span className="text-warning">{cards}</span>
                                    </span>
                                </h3>
                            </div>
                            <div className="justify-content-center" style={styleAdvance}>
                                <h3>
                                    Ratio <span className="text-warning">{percentage}%</span> -
                                    <span className="text-warning"> V - {win} / D - {lose} / E - {draw}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-body-content card-body-simple">
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
                                    <button
                                        className="btn"
                                        onClick={handleDraw}
                                        onMouseEnter={e => {
                                            setStyle({ display: 'block' })
                                            setInfoText(infoTextDraw)
                                        }} onMouseLeave={e => { setStyle({ display: 'none' }) }}
                                    >
                                        Empate
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
                                    <button className="btn btn-large-card-energy" onClick={handleEnergyAndCardMinus}>- 1 <img src={energyIcon} alt="energy-icon" />/ -1 <img src={cardIcon} alt="card-icon" /></button>
                                    <button className="btn btn-large-card-energy" onClick={handleEnergyPlusCardMinus}>+ 1 <img src={energyIcon} alt="energy-icon" />/ -1 <img src={cardIcon} alt="card-icon" /></button>
                                </div>
                            </div>
                            <div className="card-body-content" style={styleAdvance}>
                                <h3 className="text-warning">Opciones de Cartas</h3>
                                <div className="d-flex justify-content-between mt-2">
                                    <button className="btn btn-large-card-energy" onClick={handleCardsMinus}>- 1 <img src={cardIcon} alt="card-icon" /></button>
                                    <button className="btn btn-large-card-energy" onClick={handleCardsPlus}>+ 1 <img src={cardIcon} alt="card-icon" /></button>
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