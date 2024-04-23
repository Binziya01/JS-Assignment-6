## 1. Write short notes on Array methods with code example
##    •	push()
##    •	pop()
##    •	shift()
##    •	unshift()
##    •	includes()
##    •	toString()
##    •	reverse()
##    •	join()
##    •	concat()
##    •	flat()
##    •	slice()
##    •	splice()
## Ans: 
- push
- The push() method adds new items to the end of an array.The push() method changes the length of the array.


```js
 let arr=["binzi","subin","anu","steni"]
 arr.push("manu");
 console.log(arr);

```
- pop()
- The pop() method removes the last element of an array.The pop() method changes the original array.The pop() method returns the removed element.

```js
let arr=["binzi","subin","anu","steni"]
arr.pop();
console.log(arr);

```
- shift()
- The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
```js
let arr=["binzi","subin","anu","steni"]
arr.shift();
console.log(arr);


```
- unshift() :-
- The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the  new length of the array.
```js
let arr=["binzi","subin","anu","steni"]
arr.unshift("manu");
console.log(arr);
```
- includes() :-
- The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
```js
let array1 = [1, 2, 3];
console.log(array1.includes(2));
```
- toString() :-The toString() method of Array instances returns a string representing the specified array and its elements.
```js
let array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
```

- reverse() :-The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1)
```
-join() :-The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator
```js
let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-'));
```

- concat() :-The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
```js
const array1 = ['a', 'b', 'c'];
 let array2 = ['d', 'e', 'f'];
 let array3 = array1.concat(array2);
 console.log(array3);
```
- flat():-The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
```js
let arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat())
```
- slice():-The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
```js
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
```
-splice():-The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
```

# 2. https://javascript-array-methods-quiz.netlify.app/

![screenshot](./ss.jpg)

## 3. Write a JavaScript function to check whether an `input` is an array.
```js
let myNumber=[1,2,3,4,5,6]
let isArray=(arr)=>{
    return Array.isArray(arr)
}
let result=isArray(myNumber)
console.log(result);

```
## 4. Write a JavaScript function that takes an array as an argument and returns the first element of the array.

```js
let myNumber=[1,2,3,4,5]
let firstElement=(arr)=>{
    return arr.shift()
}
let result=firstElement(myNumber)
console.log(result);
```
## 5. Write a JavaScript function that takes an array as an argument and returns the last element of the array.
```js
let myNumber=[1,2,3,4,5]
let lastElement=(arr)=>{
return arr.pop()
}
let result=lastElement(myNumber)
console.log(result);
```

## 6. Write a simple JavaScript function to join all elements of the following array into a string.
## Sample array : myColor = ["Red", "Green", "White", "Black"];

```js
let myColor = ["Red", "Green", "White", "Black"];

let color=(array)=>{
return array.join(" ")
}
let result = color(myColor)
console.log(result);
```

## 7.	Write a JavaScript program that accepts a number as input and inserts dashes (-) between each. For example, if you accept 025468 the output should be 0-2-5-4-6-8

```js
let number = 12072003
let conversion=(num)=>{
    let change = String(num).split("").map((item)=>{
        return Number(item)
    })
    return change.join("-")
}
console.log(conversion(number));
```

## 8. Write a JavaScript function that checks if the given number is even or odd then returns a Boolean value (use: arrow function, return keyword, ternary operator)

```js
let number=125
let isEven=(num)=>{
    num%2===0?console.log("true"):console.log("false");
}
isEven(number)
```

## 9. Create an array of guestlist. Write a javascript function that takes the user’s name as an argument and checks if it is there in the guestlist. If yes, return the string “Welcome” else, return “Sorry, good luck next time”.

```js
let guests=["ram","sam","van","ban"]
let checkList=(item)=>{
    return guests.includes("van")?console.log("Welcome"):console.log("Sorry,good luck next time")
    

}
checkList(guests)
```

## 10. Write a javascript function that reverses a given number example: 123456789 => 987654321 (split(), reverse (), join())

```js
let number=123456789
let reverseNumber=(num)=>{
    let outPut=String(num).split("").reverse().join("")
    return outPut
}
console.log(reverseNumber(number));
```

## 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter into upper case.
## Example: “Javascript” => “Javascript”

```JS
let courseName="javascript"
let capitaliseName=(str)=>{
    let firstLetter=str.slice(0,1).toUpperCase()
     let restOfTheLetters=str.slice(1,str.length).toLowerCase()
     let displayName=firstLetter+restOfTheLetters
     return displayName
    
}
console.log(capitaliseName(courseName));
```













