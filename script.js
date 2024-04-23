/*
let myNumber=[1,2,3,4,5,6]
let isArray=(arr)=>{
    return Array.isArray(arr)
}
let result=isArray(myNumber)
console.log(result);
*/


/*
let myNumber=[1,2,3,4,5]
let firstElement=(arr)=>{
    return arr.shift()
}
let result=firstElement(myNumber)
console.log(result);
*/


/*
let myNumber=[1,2,3,4,5]
let lastElement=(arr)=>{
return arr.pop()
}
let result=lastElement(myNumber)
console.log(result);
*/

/*
let myColor = ["Red", "Green", "White", "Black"];

let color=(array)=>{
return array.join(" ")
}
let result = color(myColor)
console.log(result);
*/


/*
let number = 12072003
let conversion=(num)=>{
    let change = String(num).split("").map((item)=>{
        return Number(item)
    })
    return change.join("-")
}
console.log(conversion(number));
*/


/*
let number=125
let isEven=(num)=>{
    num%2===0?console.log("true"):console.log("false");
}
isEven(number)
*/


/*
let number = 52688

let toJoin = (num) => {
    let outPut = String(num).split("").map((item) => {
        return Number(item)
    })
    return outPut.join("-")
}
console.log(toJoin(number));
*/



/*
let guests=["ram","sam","van","ban"]
let checkList=(item)=>{
    return guests.includes("van")?console.log("Welcome"):console.log("Sorry,good luck next time")
    

}
checkList(guests)
*/


/*
let number=123456789
let reverseNumber=(num)=>{
    let outPut=String(num).split("").reverse().join("")
    return outPut
}
console.log(reverseNumber(number));
*/




let courseName="javascript"
let capitaliseName=(str)=>{
    let firstLetter=str.slice(0,1).toUpperCase()
     let restOfTheLetters=str.slice(1,str.length).toLowerCase()
     let displayName=firstLetter+restOfTheLetters
     return displayName
    
}
console.log(capitaliseName(courseName));
