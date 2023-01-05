import React, { useState } from 'react';
import {Gauge} from '../components/Gauge';
import {chaseData} from './data';
import Card from "../components/Card"
import useToggler from "../components/Toggler"

import '../styles/Section.css'

export default function Chase() {
    const data = chaseData

    const [CFTotal, setCFTotal] = useState(0)
    const [CFUTotal, setCFUTotal] = useState(0)    
    const [CSPTotal, setCSPTotal] = useState(0)
    const [CSRTotal, setCSRTotal] = useState(0)

    const [isCFincluded, toggleCF] = useToggler(false)
    const [isCFUincluded, toggleCFU] = useToggler(false)
    const [isCSPincluded, toggleCSP] = useToggler(false)
    const [isCSRincluded, toggleCSR] = useToggler(false)

        // Need to add CFU and CSR (fix breakevendolalrs as well)

        let gaugeDollarTotal = (Number(isCFincluded ? CFTotal: 0)+ Number(isCFUincluded ? CFUTotal: 0)+ Number(isCSPincluded ? CSPTotal: 0) + Number(isCSRincluded ? CSRTotal: 0)).toFixed(2)
        let breakevendollars = Number(isCSPincluded ? data[2].annualFee: 0) + Number(isCSRincluded ? data[3].annualFee: 0)

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
                {/* Chase Sapphire Rserve - Array 3*/}
                <div className="table-section">
                    <Card
                        benefitsData = {data[3].benefits}
                        cardAcronym = {data[3].cardAcronym}
                        cardCompany = {data[3].company}
                        cardName = {data[3].card}
                        ChangeDollars = {input => setCSRTotal(input)}
                        gaugeisInclude = {isCSRincluded}
                        setInclude = {toggleCSR}
                    />                
                </div>

                 {/* Chase Sapphire Preferred - Array 2*/}
                <div className="table-section">
                    <Card
                        benefitsData = {data[2].benefits}
                        cardAcronym = {data[2].cardAcronym}
                        cardCompany = {data[2].company}
                        cardName = {data[2].card}
                        ChangeDollars = {input => setCSPTotal(input)}
                        gaugeisInclude = {isCSPincluded}
                        setInclude = {toggleCSP}
                    />                
                </div>

                <div className="table-section" >
                    <Card
                        benefitsData = {data[0].benefits}
                        cardAcronym = {data[0].cardAcronym}
                        cardCompany = {data[0].company}
                        cardName = {data[0].card}
                        ChangeDollars = {input => setCFTotal(input)}
                        gaugeisInclude = {isCFincluded}
                        setInclude = {toggleCF}
                        // ChangeCalculate = {handlecalculate}
                    />                
                </div>
            </div>
   
            {/* Chase Freedom Unlimited - Array 1*/}
            <div className="table-section">
                <Card
                    benefitsData = {data[1].benefits}
                    cardAcronym = {data[1].cardAcronym}
                    cardCompany = {data[1].company}
                    cardName = {data[1].card}
                    ChangeDollars = {input => setCFUTotal(input)}
                    gaugeisInclude = {isCFUincluded}
                    setInclude = {toggleCFU}
                />                
            </div>




        </>
    )
}
