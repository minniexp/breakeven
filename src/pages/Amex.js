import React, { useState } from 'react';
import {Gauge} from '../components/Gauge';
import {americanExpressData} from './data';
import Card from "../components/Card"
import useToggler from "../components/Toggler"

export default function Amex() {
    const data = americanExpressData

    const [AGotal, setAGotal] = useState(0)    
    const [APotal, setAPotal] = useState(0)

    const [isAGincluded, toggleAG] = useToggler(false)
    const [isAPincluded, toggleAP] = useToggler(false)

        let gaugeDollarTotal = (Number(isAGincluded ? AGotal: 0)+ Number(isAPincluded ? APotal: 0)).toFixed(2)
        let breakevendollars = Number(isAGincluded ? data[0].annualFee: 0) + Number(isAPincluded ? data[1].annualFee: 0)

    return (
        <>
            <h2> {data[0].company} </h2>
            <div className="calculation-results">
                <Gauge 
                    gaugeDollarTotal = {gaugeDollarTotal}
                    breakevendollars ={breakevendollars}
                    cardCompany = {data[0].company}
                    />
                <p>Total Dollars Earned of selected cards: {gaugeDollarTotal}</p>
            </div>
        
            {/* Chase Freedom - Array 0*/}
            <div className="table-all" >

                {/* The Platinum Card - Array 1*/}
                <div className="table-section">
                    <Card
                        benefitsData = {data[1].benefits}
                        cardAcronym = {data[1].cardAcronym}
                        cardCompany = {data[1].company}
                        cardName = {data[1].card}
                        ChangeDollars = {input => setAPotal(input)}
                        gaugeisInclude = {isAPincluded}
                        setInclude = {toggleAP}
                    />                
                </div>

                {/* American Express® Gold Card - Array 0*/}
                <div className="table-section">
                    <Card
                        benefitsData = {data[0].benefits}
                        cardAcronym = {data[0].cardAcronym}
                        cardCompany = {data[0].company}
                        cardName = {data[0].card}
                        ChangeDollars = {input => setAGotal(input)}
                        gaugeisInclude = {isAGincluded}
                        setInclude = {toggleAG}
                    />                
                </div>
            </div>


        </>
    )
}
