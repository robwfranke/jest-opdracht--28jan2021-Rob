

function checkValue(n1){

    console.log("checkValue")
    if (n1<5){
        return answer = "kleiner dan 5"
    }
    if (n1>10){
        return answer = "groter dan 10"
    }
    return answer = "5 tm 10"

}

module.exports ={
    checkValue:checkValue,
}