const chaseData = [
    {
        id: 1,
        company: "Chase",
        card: "Chase Freedom",
        cardAcronym: "CF",
        annualFee: 0,
        benefits: [
            {value: 5, name:"one", description: "5x Wholesale Club, Select Streaming Servcies, Internt, Cable, and Phone Services (Q1: Jan - Mar)"},
            {value: 5, name:"two", description: "5x Gas Stations and Home Improvment Stores (Q2: Apr - Jun)"},
            {value: 5, name:"three", description: "5x Grocery Stores and Select Streaming Services (Q3: Jul - Sep)"},
            {value: 5, name:"four", description: "5x Walmart and Paypal (Q4: Oct - Dec)"}],
    },
    {
        id: 2,
        company: "Chase",
        card: "Chase Freedom Unlimited",
        cardAcronym: "CFU",
        annualFee: 0,
        benefits: [
            {value: 1.5, name:"one", description: "All purchases"}
        ]
    },
    {
        id: 3,
        company: "Chase",
        card: "Chase Sapphire Preferred",
        cardAcronym: "CSP",
        annualFee: 95,
        benefits: [
            {value: 5, name:"one", description: "5x Flights purchased through Chase"},
            {value: 3, name:"two", description: "3x Dining"},
            {value: 3, name:"three", description: "3X Online Grocery Store Purchases"},
            {value: 3, name:"four", description: "3x Streaming Services"},
            {value: 1, name:"five", description: "1x All Other Purchases"}
        ]
    },
    {
        id: 4,
        company: "Chase",
        card: "Chase Sapphire Reserve",
        cardAcronym: "CSR",
        annualFee: 550,
        benefits: [
            {value: 5, name:"one", description: "5x Flights purchased through Chase"},
            {value: 10, name:"two", description: "10x hotel and car rentals purhcased through Chase"},
            {value: 10, name:"three", description: "10X Chase Dining"},
            {value: 3, name:"four", description: "3x Travel purhcases"},
            {value: 3, name:"five", description: "3x Dining"},
            {value: 1, name:"six", description: "1x All Other Purchases"}
        ]
    }
]

// Capital One Data
const capitalOneData = [
    {
        id: 1,
        company: "Capital One",
        card: "VentureOne Rewards",
        cardAcronym: "V1",
        annualFee: 0,
        benefits: [
            {value: 5, name:"one", description: "5 miles Hotels and Rental cars booked through Capital One Travel"},
            {value: 1.25, name:"two", description: "1.25 miles All other purchases"}
        ]

    },
    {
        id: 2,
        company: "Capital One",
        card: "Venture Rewards",
        cardAcronym: "V",
        annualFee: 95,
        benefits: [
            {value: 5, name:"one", description: "5 miles Hotels and Rental cars booked through Capital One Travel"},
            {value: 2, name:"two", description: "2 miles All other purchases"}
        ]
    },
    {
        id: 3,
        company: "Capital One",
        card: "Venture X Rewards",
        cardAcronym: "VX",
        annualFee: 395,
        benefits: [
            {value: 10, name:"one", description: "10 miles Hotels and Rental cars booked through Capital One Travel"},
            {value: 5, name:"two", description: "5 miles Flights booked through Capital One Travel"},
            {value: 2, name:"three", description: "2 miles All other purchases"}
        ]
    }
]

// American Express Data
const americanExpressData = [
    {
        id: 1,
        company: "American Express",
        card: "American Express® Gold Card",
        cardAcronym: "AG",
        annualFee: 250,
        benefits: [
            {value: 4, name:"one", description: "4X Restaurants (plus takeout and delivery in the U.S."},
            {value: 4, name:"two", description: "4X Grocreis (up to $25,000 per year)"},
            {value: 3, name:"three", description: "3x Flights booked directly with airlines or on AmexTravel.com"},
            {value: 1, name:"four", description: "1X All other purchases"},
        ]

    },
    {
        id: 2,
        company: "American Express",
        card: "The Platinum Card",
        cardAcronym: "AP",
        annualFee: 695,
        benefits: [
            {value: 5, name:"one", description: "5X Flgiths booked through AMerican Express Travel (up to $500,000 per calendar)"},
            {value: 5, name:"two", description: "5X Prepaid Hotels booked on AmexTravel.com"},
            {value: 5, name:"three", description: "1X All other purchases"}
        ]

    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export {
    chaseData,
    capitalOneData,
    americanExpressData
}
