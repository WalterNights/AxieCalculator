import React, { Component } from 'react';

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            round: 1,
            energy: 3
        }
        this.handleEnergyMinus = this.handleEnergyMinus.bind(this)
        this.handleEnergyPlus = this.handleEnergyPlus.bind(this)
        this.handleNextRound = this.handleNextRound.bind(this)
        this.handleNewRound = this.handleNewRound.bind(this)
    }
    handleEnergyMinus(e) {
        const energy = this.state.energy;
        const energyMinus = this.state.energy - 1
        if(energy > 0){
            this.setState({
                energy: + energyMinus
            })
        }
    }
    handleEnergyPlus(e) {
        const energy = this.state.energy;
        const energyPlus = this.state.energy + 1
        if(energy < 10){
            this.setState({
                energy: + energyPlus
            })
        }
    }
    handleNextRound() {
        const energy = this.state.energy;
        const nextRound = this.state.round + 1
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
        this.setState({
            round: + nextRound,
            energy: + nextEnergy
        })
    }
    handleNewRound() {
        const nextRound = 1
        const nextEnergy = 3
        this.setState({
            round: + nextRound,
            energy: + nextEnergy
        })
    }
    render() {
        return (
            <div className="calculator-container col-4">
                <div className="card">
                    <div className="card-header">
                        <div className="">
                            <h3>
                                Ronda <span className="text-warning">{this.state.round}</span> -
                                Energia <span className="text-warning">{this.state.energy}/10</span>
                            </h3>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-warning" onClick={this.handleEnergyPlus}>+ 1</button>
                            <button className="btn btn-warning" onClick={this.handleEnergyMinus}>- 1</button>
                            <button className="btn btn-warning" onClick={this.handleNextRound}>Siguiente Ronda</button>
                            <button className="btn btn-warning" onClick={this.handleNewRound}>Nueva Ronda</button>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="mb-3">
                            <select name="axieOne" className="form-control" onChange={this.handleInput}>
                                <option>Planta</option>
                                <option>Reptil</option>
                                <option>Dusck</option>
                                <option>Pez</option>
                                <option>Pajaro</option>
                                <option>Dawn</option>
                                <option>Bestia</option>
                                <option>Insecto</option>
                                <option>Meca</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <select name="axieTwo" className="form-control" onChange={this.handleInput}>
                                <option>Planta</option>
                                <option>Reptil</option>
                                <option>Dusck</option>
                                <option>Pez</option>
                                <option>Pajaro</option>
                                <option>Dawn</option>
                                <option>Bestia</option>
                                <option>Insecto</option>
                                <option>Meca</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <select name="axieThree" className="form-control" onChange={this.handleInput}>
                                <option>Planta</option>
                                <option>Reptil</option>
                                <option>Dusck</option>
                                <option>Pez</option>
                                <option>Pajaro</option>
                                <option>Dawn</option>
                                <option>Bestia</option>
                                <option>Insecto</option>
                                <option>Meca</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;