//import { Link } from "react-router-dom";

import { getDataBase } from "../database.js"

import React, { useState, useEffect } from 'react';

import { getApiResponse } from "../services/services"

export default function Invoices() {

    const [apiData, setApiData] = useState('');
    const [comboDamage, setComboDamage] = useState(0);

    useEffect(() => {
        if (!apiData) {
            getApiData();
        }
    }, [apiData]);

    const apiDataBase = getDataBase();
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
    };

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

    const damageOperation = [];

     const handleAbilities = (e) => {
        const damage = e.target.value
        damageOperation.push(damage);
        const sumDamage = damageOperation.map(sum => {return /^\d+$/.test(sum) ? parseInt(sum): 0;}).reduce((a, b) => {return a+b});
        setComboDamage(sumDamage);
        console.log("damageOperation", damageOperation);
        console.log("sumDamage", sumDamage);
        console.log("comboDamage", comboDamage);
    }


    const listParts = Object.values(apiData).map((parts, key) =>
        <li key={key} className="mt-5">
            <div className="d-flex justify-content-center">
                <span className="text-white">#{parts.id}</span>
            </div>
            <img src={parts.image} style={{ height: "10vw" }} alt="axie_image" />
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
                                    <button key={id} className="" value={card.damage} style={{ background: "wheat", color: "#462D17", width: "10vw" }} onClick={handleAbilities}>
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
                    <ul className="col-11 d-flex justify-content-evenly mx-auto" style={{ padding: 0 }}>
                        {listCards}
                    </ul>
                </div>
                <div className="col-10 d-flex justify-content-center mx-auto">
                    <input type="number" className="col-12" value={comboDamage} readOnly/>
                </div>
            </section>
        </div>
    );
};