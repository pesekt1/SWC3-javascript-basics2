//arrays-------------------------------------------

//adding elements ----------------------------
console.log("adding elements ------------------");

let numbers = [3,4];
//we cannot do: numbers = [];
numbers.push(5,6);
console.log(numbers);

numbers.unshift(1,2);
console.log(numbers);

numbers.splice(2,0,9,9);
console.log(numbers);



//adding elements - primitives ----------------------------
console.log("finging elements - primitives ------------------");

console.log(numbers.indexOf("a"));
console.log(numbers.indexOf(9));
console.log(numbers.lastIndexOf(9));
console.log(numbers.indexOf(9) !== -1); //contains the item?
console.log(numbers.includes(9));
console.log(numbers.indexOf(9,4)); //looking from index 4



//adding elements - reference types ----------------------------
console.log("adding elements - reference types ---------------");

let courses = [
    {id: 1, name: "Peter"},
    {id: 2, name: "Martin"}
];

console.log(courses.includes({id: 1, name: "Peter"})); //false ... different reference
let course = courses.find(function(course){return course.name === "Peter"});
console.log(course);

//arrow function
course = courses.find((course) => {return course.name === "Peter"});
console.log(course);



//removing elements ----------------------------
console.log("removing elements ------------------");

const array = [1,2,3,4,5,6,7,8];
const last = array.pop(); //removes the last item and returns it
const first = array.shift(); //removes the first item and returns it
array.splice(2,1); //removes from the given index, given number of items
console.log(array);



//emptying an array ----------------------------
console.log("emptying an array ------------------");

let numbersArray = [1,2,3,4,5,6,7,8];
let anotherArray = numbersArray; //reference

//solution1
numbersArray = []; //new reference
console.log(numbersArray);
console.log(anotherArray); //[1,2,3,4,5,6,7,8]

//solution2
numbersArray = [1,2,3,4,5,6,7,8];
anotherArray = numbersArray;

numbersArray.length = 0;

console.log(numbersArray); //[]
console.log(anotherArray); //[]

//solution3
numbersArray = [1,2,3,4,5,6,7,8];
anotherArray = numbersArray;

numbersArray.splice(0, numbersArray.length);

console.log(numbersArray); //[]
console.log(anotherArray); //[]

//solution4
numbersArray = [1,2,3,4,5,6,7,8];
anotherArray = numbersArray;

while(numbersArray.length > 0){
    numbersArray.pop();
}

console.log(numbersArray); //[]
console.log(anotherArray); //[]



//combining and slicing arrays ----------------------------
console.log("combining and slicing arrays ------------------");
let array1 = [1,2,3];
let array2 = [4,5,6];

let combinedArray = array1.concat(array2);
console.log(combinedArray);

let slicedArray = combinedArray.slice(2,4); //start - end index
console.log(slicedArray);

slicedArray = combinedArray.slice(2); //start index
console.log(slicedArray);

//for objects: we are working with references...
array1 = [{id: 10},2,3];
array2 = [4,5,6];

combinedArray = array1.concat(array2);
console.log(combinedArray);

array1[0].id = 20;
console.log(combinedArray);



//spread operator ----------------------------
console.log("spread operator ------------------");
array1 = [1,2,3];
array2 = [4,5,6];

combinedArray = [...array1, ...array2];
console.log(combinedArray);

combinedArray = [...array1, "a", ...array2, "b"];
console.log(combinedArray);

let copiedArray = combinedArray.slice(); //copying an array
console.log(copiedArray);

copiedArray = [...combinedArray]; //copying an array
console.log(copiedArray);


//... to be continued