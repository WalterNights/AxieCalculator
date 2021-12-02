//import { Link } from "react-router-dom";

import { getDataBase } from "../database.js"

import React, { useState, useEffect } from 'react';

import { getApiResponse } from "../services/services"

import plantIcon from "../static/class-icons/plant_icon.png"
import reptilIcon from "../static/class-icons/reptil_icon.png"
import dusckIcon from "../static/class-icons/dusck_icon.png"
import aquaIcon from "../static/class-icons/aquatic_icon.png"
import birdIcon from "../static/class-icons/bird_icon.png"
import dawnIcon from "../static/class-icons/dawn_icon.png"
import insectIcon from "../static/class-icons/insect_icon.png"
import beastIcon from "../static/class-icons/beast_icon.png"
import mechaIcon from "../static/class-icons/mecha_icon.png"

const damageOperation = [];
const ability = [];

export default function Invoices() {

    var skill = 35;
    var cardDamage = 0;
    var bonusAxie = 1.1;
    var strengthWeakness = 1.15;
    var conditionCard = 0.94;
    var bonusCritic = 1;

    const [apiData, setApiData] = useState('');
    const [comboDamage, setComboDamage] = useState(0);

    useEffect(() => {
        if (!apiData) {
            getApiData();
        }
    }, [apiData]);

    const apiDataBase = getDataBase();
    const axieType = [];
    const axieParts = [];
    const axieCards = [];
    const db = {
        'axie-0': [],
        'axie-1': [],
        'axie-2': [],
    };

    const getApiData = async () => {
        const AxieTeam = await getApiResponse();
        const AxieData = await AxieTeam
        setApiData(AxieData);
    };

    for (const value of apiData) {
        axieType.push(value.class)
        axieParts.push(value.parts);
    };

    // eslint-disable-next-line no-unused-vars
    for (const [key, value] of axieParts.entries()) {
        const axie = [];
        // eslint-disable-next-line no-unused-vars
        for (const [keys, values] of value.slice(2, 6).entries()) {
            axie.push(values.name);
        }
        axieCards.push(axie);
        //console.log(axieCards[0], axieType)
    };

    for( const value of axieCards){
        console.log(value[0])
    }

    for (const elem of apiDataBase) {
        // eslint-disable-next-line no-unused-vars
        for (const [key0, value0] of Object.entries(elem)) {
            // eslint-disable-next-line no-unused-vars
            const foundPart = value0.forEach((part) => {
                // eslint-disable-next-line no-unused-vars
                for (const [key1, value1] of Object.entries(part)) {
                    value1.forEach((type) => {
                        for (const [key2, value2] of Object.entries(type)) {
                            axieCards.forEach((cardArray, index) => {
                                if (cardArray.includes(key2)) {
                                    db[`axie-${index}`].push({ [key2]: value2 });
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    //console.log(db)

    const handleAbilities = (e) => {
        if (damageOperation.length <= 9) {
            const damage = e.target.value
            cardDamage = damage;
            const bonusSkill = (cardDamage * skill) / 500
            const totalDamage = Math.round(cardDamage * bonusAxie * strengthWeakness * conditionCard * bonusCritic + bonusSkill);
            console.log(cardDamage)
            const abilityInfo = e.target.name + ": " + totalDamage
            damageOperation.push(totalDamage);
            ability.push(abilityInfo)
            console.log(ability)
            const sumDamage = damageOperation.map(sum => { return /^\d+$/.test(sum) ? parseInt(sum) : 0; }).reduce((a, b) => { return a + b });
            setComboDamage(sumDamage);
            console.log("damageOperation", damageOperation);
        }
    }

    const listParts = Object.values(apiData).map((parts, key) =>
        <li key={key} className="mt-5">
            <div className="d-flex justify-content-center">
                <span className="text-white">#{parts.id}</span>
            </div>
            <img src={parts.image} style={{ height: "10vw" }} alt="axie_image" />
            {Object.values(parts.class)}
        </li>
    );

    const listCards = Object.values(db).map((item, index) => {
        return (
            <ul key={index} style={{ padding: 0 }}>
                {Object.values(item).map((value, key) => {
                    return (
                        <li key={key}>
                            {Object.values(value).map((card, id) => {
                                return (
                                    <button
                                        key={id}
                                        name={Object.keys(value)}
                                        value={card.damage}
                                        style={{ background: "wheat", color: "#462D17", width: "10vw" }}
                                        onClick={handleAbilities}
                                    >
                                        {Object.keys(value)}: {card.damage}
                                    </button>
                                )
                            })}
                        </li>
                    )
                })}
            </ul>
        );
    });

    const listAbilities = Object.values(ability).map((value, key) => {
        return (
            <li className="text-white" key={key}>
                {value}
            </li>
        );
    });

    return (
        <div className="">
            <section className="d-flex flex-column align-items-center justify-content-center">
                <div className="text-danger"><h1>PRUEBA DE CALCULADORA DE DAÑO</h1></div>
            </section>
            <section className="col-6 mx-auto">
                <div>
                    <ul className="col-10 d-flex justify-content-evenly mx-auto" style={{ padding: 0 }}>
                        {listParts}
                    </ul>
                </div>
                <div>
                    <div className="col-10 d-flex justify-content-evenly mx-auto mb-4">
                        <button style={{ background: "none", border: "none" }}>
                            <img src={plantIcon} alt="aqua_icon" style={{ height: "1.5vw" }} />
                        </button>
                        <button style={{ background: "none", border: "none" }}>
                            <img src={reptilIcon} alt="aqua_icon" style={{ width: "2vw" }} />
                        </button>
                        <button style={{ background: "none", border: "none" }}>
                            <img src={dusckIcon} alt="aqua_icon" style={{ width: "2vw" }} />
                        </button>
                        <button style={{ background: "none", border: "none" }}>
                            <img src={aquaIcon} alt="aqua_icon" style={{ width: "2vw" }} />
                        </button>
                        <button style={{ background: "none", border: "none" }}>
                            <img src={birdIcon} alt="aqua_icon" style={{ height: "2vw" }} />
                        </button>
                        <button style={{ background: "none", border: "none" }}>
                            <img src={dawnIcon} alt="aqua_icon" style={{ width: "2vw" }} />
                        </button>
                        <button style={{ background: "none", border: "none" }}>
                            <img src={insectIcon} alt="aqua_icon" style={{ width: "2vw" }} />
                        </button>
                        <button style={{ background: "none", border: "none" }}>
                            <img src={beastIcon} alt="aqua_icon" style={{ width: "2vw" }} />
                        </button>
                        <button style={{ background: "none", border: "none" }}>
                            <img src={mechaIcon} alt="aqua_icon" style={{ width: "2vw" }} />
                        </button>
                    </div>
                    <ul className="col-10 d-flex justify-content-evenly mx-auto" style={{ padding: 0 }}>
                        {listCards}
                    </ul>
                </div>
                <div className="col-10 d-flex justify-content-center mx-auto">
                    <input type="number" className="col-12" value={comboDamage} readOnly />
                </div>
                <div className="col-10 mx-auto">
                    <ul className="col-11 d-flex flex-column justify-content-evenly align-item-center mx-auto" style={{ padding: 0 }}>
                        {listAbilities}
                    </ul>
                </div>
            </section>
        </div>
    );
};