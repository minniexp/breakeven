import React from 'react';
import { arc } from "d3-shape"
import { scaleLinear } from "d3-scale"
import '../styles/Gauge.css'


export const Gauge = (props, {
  value = props.gaugeDollarTotal,
  min=0,
  max=1100,
  // slidermax=300,
  creditValue=0,
  tickervalue=props.breakevendollars,

}) => {
  // const [creditValue, setCreditValue] = useState(0)

  // const getBackgroundSize = () => {
  //   //return {backgroundSize: `${creditValue *3.2 / 10} 100%`}
  //   return {backgroundSize: `${creditValue*100/slidermax}%`}
  // }

  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)
    ()

  const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1])

  const percent = percentScale(value)

  const tickerpercent = percentScale(tickervalue-creditValue)

  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true)

  let angle = angleScale((percent > 0.93) ? 0.93 : (percent > 0.05) ? percent : 0.05)
  

  const tickerangle = angleScale((tickerpercent > 0.93) ? 0.93 : (tickerpercent > 0.05) ? tickerpercent : 0.05)

  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)
    ()

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#dbdbe7", "#344fd4"])

  const gradientSteps = colorScale.ticks(10)
    .map(value => colorScale(value))

  const getCoordsOnArc = (tickerangle, offset=10) => [
    Math.cos(tickerangle - (Math.PI / 2)) * offset,
    Math.sin(tickerangle - (Math.PI / 2)) * offset,
    ]
  const tickerLocation = getCoordsOnArc(
    tickerangle,
        1- ((1 - 0.65) / 2),
      )
  const markerLocation = getCoordsOnArc(
    angle,
    1 - ((1 - 0.65) / 2),
    )

  return (
    <div
      style={{
        textAlign: "center",
      }}>
      <svg style={{overflow: "visible"}}
        width="15em"
        viewBox={[
          -1, -1,
          2, 1,
        ].join(" ")}>
        <defs>
          <linearGradient
            id="Gauge__gradient"
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
            y2="0">
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${
                  index
                  / (gradientSteps.length - 1)
                }`}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={backgroundArc}
          fill="#dbdbe7"
        />
        <path
          d={filledArc}
          fill="url(#Gauge__gradient)"
          style={{
            transitionProperty: "fill",
            transitionDuration:"10s",
            transitionDelay: "10000ms"}}
          

        />
        {/* <line
          y1={tickerLocation[1]}
          y2="0"
          x1={tickerLocation[0]}
          x2="0"
          stroke="white"
          strokeWidth="0.027"
        /> */}
        <path
          d="M0.136364 0.0290102C0.158279 -0.0096701 0.219156 -0.00967009 0.241071 0.0290102C0.297078 0.120023 0.375 0.263367 0.375 0.324801C0.375 0.422639 0.292208 0.5 0.1875 0.5C0.0852272 0.5 -1.8346e-08 0.422639 -9.79274e-09 0.324801C0.00243506 0.263367 0.0803571 0.120023 0.136364 0.0290102ZM0.1875 0.381684C0.221591 0.381684 0.248377 0.356655 0.248377 0.324801C0.248377 0.292947 0.221591 0.267918 0.1875 0.267918C0.153409 0.267918 0.126623 0.292947 0.126623 0.324801C0.126623 0.356655 0.155844 0.381684 0.1875 0.381684Z"
          transform={`rotate(${
            angle * (180 / Math.PI)
          }) translate(-0.2, -0.33)`}
          fill="#6a6a85"
        />

        {/* total dollar marker circle */}
        <circle className='marker-circle'
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.18"
          stroke="#2c3e50"
          strokeWidth="0.005"
          fill={colorScale(percent)}
        />

        {/* breakeven ticker circle */}
          <circle 
          cx={tickerLocation[0]}
          cy={tickerLocation[1]}
          r="0.18"
          stroke={value>=tickervalue ? "#0080ff": "#dd5555"}
          strokeWidth={"0.035"}
          fill={colorScale(tickerpercent)}
        />
      </svg>
      <div className="guage-text" style={{textAlign: "center"}}>
        <div style={{
            marginTop: "0.7em",
            fontSize: "3em",
            lineHeight: "1em",
            fontWeight: "900",
            fontFeatureSettings: "'zero', 'tnum' 1",
        }}>
            {/* { `$${format(",")(value)}` } */}
        </div>
        <div className="slider-header">

                <div style={{
                    color: "#8b8ba7",
                    marginTop: "0.6em",
                    fontSize: "1.3em",
                    lineHeight: "1.3em",
                    fontWeight: "700",
                }}>
                { `Break Even Point: $${props.breakevendollars-creditValue}` }
                </div>
            </div>
      </div>
        {/* <div className='slider-comp'>
          {tickervalue>0 && 
            <Styles>
                <span>Travel Credit</span>
                <input 
                    className="slider-input"
                    type="range" 
                    min={0} 
                    max = {props.isReserve ? max="300" : max="50"} 
                    value={creditValue} 
                    style={getBackgroundSize()}
                    onChange={(event) => setCreditValue(event.target.valueAsNumber)}/>
                <span style={{marginLeft:"10px"}}className="value">{creditValue}</span>
            </Styles>}
        </div> */}
    </div>

  )
}
