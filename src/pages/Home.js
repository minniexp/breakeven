import React from "react"
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <h1> Are you earning more rewards than the annual fee?</h1>
            <h2> Find out using the BreakEVEN calculator</h2>
            <Link to ="/Chase"><button>Chase</button></Link>
            <Link to ="/CapitalOne"><button>Capital One</button></Link>
            <Link to ="/Amex"><button>American Express</button></Link>

        </div>
    )
    
}

export default Home

/*
<div className="card">
   <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/image-4-2.png" alt="">
  <div className="content">
    About
        <p>
            Chase provides Chase Ultimate Reward Points® for purhcases made with a qualifying Chase credit card.
        </p>
        <p>
            Chase Ultimate Rewards® is the name of the points program for Chase's rewards credit cards. Among points systems, Chase's program is highly regarded because point values can be relatively high if used strategically to pay for travel.
        </p>
        <p>
            However, some cards have an annual fee. This website is to check if your spending is enough to breaks-even.
        </p>
  </div>
</div>

            <div className="container">
                <Row >
                    <Col className='column'>
                        <div className="card" style={{height:'550px'}}>
                            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/image-4-2.png" alt=""/>
                            <div className='bold'>About</div>
                            <div className="content">
                                <p>
                                    Chase provides Chase Ultimate Reward Points® for purhcases made with a qualifying Chase credit card.
                                </p>
                                <p>
                                    Chase Ultimate Rewards® is the name of the points program for Chase's rewards credit cards. Among points systems, Chase's program is highly regarded because point values can be relatively high if used strategically to pay for travel.
                                </p>
                                <p>
                                    However, some cards have an annual fee. This website is to check if your spending is enough to breaks-even.
                                </p>
                            </div>
                        </div>
                    </Col> 
                    <Col className='column'>
                        <div className="card" style={{height:'550px'}}>
                            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/image-4-2.png" alt=""/>
                            <div className='bold'>Instructions</div>
                                <div className="content">
                                    <ol>
                                        <li>Choose the desired credit card.</li>
                                        <li>Enter the transaction amount.</li>
                                        <li>If "Total Earned" is more than annual fee, you "broke even!"</li>
                                    </ol>
                                </div>
                            </div>
                    </Col> 
                    <Col className='column'>
                        <div className="card" style={{height:'550px'}}>
                            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/image-4-2.png" alt=""/>
                            <div className='bold'>Tip</div>
                                <div className="content">
                                    <ul>
                                        <li>Chaes Ultimate Rewards an be transferred.</li>
                                        <li>This means that points gathered for the Chase Freedom line can be used to calculate breakeven point for Chase Sapphire lines</li>
                                    </ul>
                                </div>
                        </div>
                    </Col>
                </Row>
*/