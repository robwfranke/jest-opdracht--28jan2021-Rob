// maak functie die waarde vergelijkt, groter dan 10, string is dan "groter dan 10" , kleiner dan 5, string "kleiner dan 5"
const checkValue = require("./index").checkValue;


test("checkValue() should return kleiner dan 5 if number is smaller dan 5", () => {

    console.log("Test 1 add()")
//ARRANGE
    const n1 = 4;


    // ACT

    const answer = checkValue(n1);
    console.log(answer);

    // ASSERT
    expect(answer).toEqual("kleiner dan 5"); /* expect en toEqual uit jest*/

})

test("checkValue() should return kleiner dan 5 if number is smaller dan 5", () => {

    console.log("Test 2 checkValue")
//ARRANGE
    const n1 = 5;




    const answer = checkValue(n1);
    console.log(answer);

    // ASSERT
    expect(answer).toEqual("5 tm 10"); /* expect en toEqual uit jest*/

})


test("checkValue() should return kleiner dan 5 if number is smaller dan 5", () => {

    console.log("Test 3 checkValue()")
//ARRANGE
    const n1 = 6;




    const answer = checkValue(n1);
    console.log(answer);

    // ASSERT
    expect(answer).toEqual("5 tm 10"); /* expect en toEqual uit jest*/

})



test("checkValue() should return kleiner dan 5 if number is smaller dan 5", () => {

    console.log("Test 3 checkValue()")
//ARRANGE
    const n1 = 10;




    const answer = checkValue(n1);
    console.log(answer);

    // ASSERT
    expect(answer).toEqual("5 tm 10"); /* expect en toEqual uit jest*/

})




test("checkValue() should return kleiner dan 5 if number is smaller dan 5", () => {

    console.log("Test 3 checkValue()")
//ARRANGE
    const n1 = 11;




    const answer = checkValue(n1);
    console.log(answer);

    // ASSERT
    expect(answer).toEqual("groter dan 10"); /* expect en toEqual uit jest*/

})
// testje(4);
// console.log(answer);
//
// testje(12);
// console.log(answer);
//
// testje(1);
// console.log(answer);

