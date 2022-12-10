function totalEarned(cardAcronym, one, two, three, four, five, six){
    // Chase 
    if (cardAcronym==="CF") {
        let sumdollars = ((parseFloat(one*5)+parseFloat(two*5)+parseFloat(three*5)+parseFloat(four*5))/100)
        five = 0
        six = 0
        return sumdollars
    } 
    else if (cardAcronym==="CFU") {
        if (!one) {
            return 0
        }
        let sumdollars = ((parseFloat(one)*1.5)/100)
        return sumdollars
    } 
    else if (cardAcronym==="CSP") {
        let sumdollars = (((parseFloat(one*5)+parseFloat(two*3)+parseFloat(three*3)+parseFloat(four*3)+parseFloat(five*1))*1.1)/100)*5
        return sumdollars
    }
    else if (cardAcronym==="CSR") {
        if (!one && !two && !three && !four && !five && !six) {
            return 0
        }
        let sumdollars = ((parseFloat(one*5)+parseFloat(two*10)+parseFloat(three*10)+parseFloat(four*3)+parseFloat(five*3)+parseFloat(six))/100)
        return sumdollars
    }

    // Captial One
    else if (cardAcronym==="V1") {
        let sumdollars = (parseFloat(one*5)+parseFloat(two*1.25))/100
        return sumdollars
    } 
    else if (cardAcronym==="V") {
        let sumdollars = (parseFloat(one*5)+parseFloat(two*2))/100
        return sumdollars
    } 
    else if (cardAcronym==="VX") {
        let sumdollars = (parseFloat(one*10)+parseFloat(two*5)+parseFloat(three*2))/100
        return sumdollars
    }

    // American Express
    else if (cardAcronym==="AP") {
        let sumdollars = (parseFloat(one*5)+parseFloat(two*5)+parseFloat(three*1))/100
        return sumdollars
    } 
    else if (cardAcronym==="AG") {
        let sumdollars = (parseFloat(one*4)+parseFloat(two*4)+parseFloat(three*3)+parseFloat(four*1))/100
        return sumdollars
    } 

}


function totalPoints(cardAcronym, one, two, three, four, five, six){
    if (cardAcronym==="CF") {
        let sumpoints = (parseFloat(one*5)+parseFloat(two*5)+parseFloat(three*5)+parseFloat(four*5))
        return sumpoints
    } 
    else if (cardAcronym==="CFU") {
        if (!one) {
            return 0
        }
        let sumpoints = (parseFloat(one)*1.5)
        return sumpoints
    }
    else if (cardAcronym==="CSP") {
        let sumpoints = ((parseFloat(one*5)+parseFloat(two*3)+parseFloat(three*3)+parseFloat(four*3)+parseFloat(five*1))*1.1)
        return sumpoints
    }
    else if (cardAcronym==="CSR") {
        if (!one && !two && !three && !four && !five && !six) {
            return 0
        }
        let sumpoints = (parseFloat(one*5)+parseFloat(two*10)+parseFloat(three*10)+parseFloat(four*3)+parseFloat(five*3)+parseFloat(six))
        return sumpoints
        }

    // Captial One
    else if (cardAcronym==="V1") {
        let sumdollars = (parseFloat(one*5)+parseFloat(two*1.25))
        return sumdollars
    } 
    else if (cardAcronym==="V") {
        let sumdollars = (parseFloat(one*5)+parseFloat(two*2))
        return sumdollars
    } 
    else if (cardAcronym==="VX") {
        let sumdollars = (parseFloat(one*10)+parseFloat(two*5)+parseFloat(three*2))
        return sumdollars
    }

    // American Express
    else if (cardAcronym==="AP") {
        let sumdollars = (parseFloat(one*5)+parseFloat(two*5)+parseFloat(three*1))
        return sumdollars
    } 
    else if (cardAcronym==="AG") {
        let sumdollars = parseFloat(one*4)+parseFloat(two*4)+parseFloat(three*3)+parseFloat(four*1)
        return sumdollars
    } 
}

export {
    totalEarned,
    totalPoints
};