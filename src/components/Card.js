import React, {useState} from 'react'
import { totalEarned, totalPoints } from './Sum.js'
import '../styles/Card.css'

export default function Card(props) {
    const [formData, setFormData] = useState(
        {one: "0", two: "0", three: "0", four: "0", five: "0", six: "0"}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    // const [isInclude, setIsInclude] = useState(false)

    // function toggleInclude() {
    //     setIsInclude(previnclude => !previnclude)
    // }

    let sumDollars = totalEarned(props.cardAcronym, formData.one, formData.two, formData.three, formData.four, formData.five, formData.six).toFixed(2)
    let sumPoints = totalPoints(props.cardAcronym, formData.one, formData.two, formData.three, formData.four, formData.five, formData.six).toFixed(2)

    function createTable() {
        return (
            <table>
                {
                    props.benefitsData.map((item) => (
                        <tr className="border-line">
                            <th>{item.description}</th>
                            <th>
                                <form>
                                    <input className="number-input" type='number' name={item.name} value={formData[item.name]} placeholder="1.00" />    
                                </form>
                            </th>
                        </tr>
                        
                    ))
                }
                {/* <div className="total-earned" >
                    <tr>Total Earned: 
                        <th>
                            {`${sumDollars}`}
                        </th>
                    </tr>
                </div> */}
                <div className="total-points" >
                    <tr>Total {props.cardCompany === "Capital One" ? "Miles" : "Points"}: 
                        <th>
                            {sumPoints ? sumPoints : 0}
                        </th>
                    </tr>
                </div>
                <div className="total-earned" onChange={props.ChangeDollars(sumDollars)}>
                    <tr>Total Earned: 
                        <th>
                            {sumDollars ? `${sumDollars}`: 0}
                        </th>
                    </tr>
                </div>


            </table>
        )
    }

    return (
        <>
            <div id="table-container">
                <div className="table-header">
                    <span>{props.cardName}</span>
                    <input type="checkbox" onClick={props.setInclude}/>
                </div>

                <div className="table" onChange={handleChange}>
                    {props.gaugeisInclude ? createTable() : ""}
                </div>                
            </div>


        </>
    )

}