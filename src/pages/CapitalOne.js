import React, { useState } from 'react';
import {Gauge} from '../components/Gauge';
import {capitalOneData} from './data';
import Card from "../components/Card"
import useToggler from "../components/Toggler"

export default function CapitalOne() {
    const data = capitalOneData

    const [V1otal, setV1otal] = useState(0)
    const [VTotal, setVTotal] = useState(0)    
    const [VXTotal, setVXTotal] = useState(0)

    const [isV1included, toggleV1] = useToggler(false)
    const [isVincluded, toggleV] = useToggler(false)
    const [isVXincluded, toggleVX] = useToggler(false)

        let gaugeDollarTotal = (Number(isV1included ? V1otal: 0)+ Number(isVincluded ? VTotal: 0)+ Number(isVXincluded ? VXTotal: 0)).toFixed(2)
        let breakevendollars = Number(isVincluded ? data[1].annualFee: 0) + Number(isVXincluded ? data[2].annualFee: 0)

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

                {/* Capital One Venture X Rewards - Array 2*/}
                <div className="table-section">
                    <Card
                        benefitsData = {data[2].benefits}
                        cardAcronym = {data[2].cardAcronym}
                        cardCompany = {data[2].company}
                        cardName = {data[2].card}
                        ChangeDollars = {input => setVXTotal(input)}
                        gaugeisInclude = {isVXincluded}
                        setInclude = {toggleVX}
                    />                
                </div>

                {/* Capital One Venture Rewards - Array 1*/}
                <div className="table-section">
                    <Card
                        benefitsData = {data[1].benefits}
                        cardAcronym = {data[1].cardAcronym}
                        cardCompany = {data[1].company}
                        cardName = {data[1].card}
                        ChangeDollars = {input => setVTotal(input)}
                        gaugeisInclude = {isVincluded}
                        setInclude = {toggleV}
                    />                
                </div>
                
                {/* Capital One Venture Rewards - Array 1*/}
                <div className="table-section">
                    <Card
                        benefitsData = {data[0].benefits}
                        cardAcronym = {data[0].cardAcronym}
                        cardCompany = {data[0].company}
                        cardName = {data[0].card}
                        ChangeDollars = {input => setV1otal(input)}
                        gaugeisInclude = {isV1included}
                        setInclude = {toggleV1}
                    />                
                </div>
            </div>


        </>
    )
}
