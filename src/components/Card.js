import React, {useState} from 'react'
import { totalEarned, totalPoints } from './Sum.js'
import '../styles/Card.css'

export default function Card(props) {
    const [formData, setFormData] = useState(
        {one: "", two: "", three: "", four: "", five: "", six: "", seven: ""}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function clearData() {
        setFormData({one: "", two: "", three: "", four: "", five: "", six: "", seven: ""})
    }
    // const [isInclude, setIsInclude] = useState(false)

    // function toggleInclude() {
    //     setIsInclude(previnclude => !previnclude)
    // }

    let sumDollars = totalEarned(props.cardAcronym, formData.one, formData.two, formData.three, formData.four, formData.five, formData.six, formData.seven).toFixed(2)
    let sumPoints = totalPoints(props.cardAcronym, formData.one, formData.two, formData.three, formData.four, formData.five, formData.six, formData.seven).toFixed(2)

    function createTable() {
        return (
            <table>
                {
                    props.benefitsData.map((item) => (
                        <tr className="border-line">
                            <th className="item-description">{item.description}</th>
                            <th className="input-container">
                                $ <input type='number' className="number-input" name={item.name} value={formData[item.name]} placeholder="1.00" />    
                            </th>
                        </tr>
                        
                    ))
                }
                <tr>
                    <th>
                    </th>
                    <th>
                        <button className="clear-all-btn" onClick={clearData}>Clear All</button>
                    </th>
                </tr>

                
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
                    <input type="checkbox" className="checkbox" onClick={props.setInclude}/>
                </div>

                <div className="table" onChange={handleChange}>
                    {props.gaugeisInclude ? createTable() : ""}
                </div>                
            </div>


        </>
    )

}