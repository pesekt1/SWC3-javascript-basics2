//objects---------------------------------------
console.log("objects----------------------");

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log("drawing a circle: radius:" + this.radius + " location: " + this.location.x + "," + this.location.y);
    }
};

console.log(circle);
circle.draw();


//factory functions---------------------------------
console.log("factory functions----------------------");

//we use camel naming notation
function createCircle(radius, location){
    return {
        radius: radius, //we can write radius if both key / value have the same name
        location: location,
        isVisible: true,
        draw(){
            console.log("drawing a circle: radius:" + this.radius)
        }
    }
};

const circle1 = createCircle(1, {x:2,y:2});
console.log(circle1);
circle1.draw();


//constructor functions:------------------------
console.log("constructor functions----------------------");

//Pascal naming notation
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("drawing a circle: radius:" + this.radius);
    }
};

const circle2 = new Circle(1); //instantiating an object

//process:
//const x = {}
//"this" will point to new object
//return x

console.log(circle2);
circle2.draw();


//dynamic nature of objects - "const" does not mean that we cannot modify:
console.log("dynamic nature of objects----------------------");
const circle3 = {
    radius: 1
};

//we cannot do this:
//circle = {};

//but we can do this:
circle3.color = "yellow";
circle3.draw = function(){
    console.log("drawing a circle: radius:" + this.radius);
};

console.log(circle3);
circle3.draw();

delete circle3.color;
delete circle3.draw;

console.log(circle3);


//constructor property---------------------------------:
console.log("constructor property----------------------");
const circle4 = new Circle(2);
console.log(circle4.constructor); //constructor
console.log(circle.constructor); //built-in constructor

//let x = {}
//javascript does this: let x = new Object();


//build in constructors / constructor functions:
//String(): "", ''. ``
//Boolean(): false, true
//Number(): 1,2,3
console.log("build in constructors----------------------");
let x = 1;
console.log(x);
let y = new Number(1);
console.log(y);
console.log(y.valueOf());


//functions are objects-----------------------------------:
console.log("functions are objects----------------------");

console.log(Circle.name); //function name
console.log(Circle.length); //number of args
console.log(Circle.constructor); // Function() - built-in constructor

const Circle1 = new Function(
    "radius", 
    `
    this.radius = radius;
    this.draw = function(){
    console.log("drawing a circle: radius:" + this.radius);
    }
    `
);

circle5 = new Circle1(5);
console.log(circle5);
circle5.draw();


//methods available in the constructor functions:
console.log("methods in constructor functions----------------------");
//check in the browser console:
//Circle.call
//Circle.bind


//reference types
console.log("reference types ----------------------");
//primitives are copied by their value:
let a = 10;
let b = a;
a = 20;
console.log(a);
console.log(b);

//objects are copied by their reference:
let o = {value: 10};
let p = o;
o.value = 20;
console.log(o);
console.log(p);

//another example of copying primitive types:
let number = 10;

function increasePrimitive(number){
    number++;
}

increasePrimitive(number);
console.log("number: " + number);

//another example of copying reference types:
let obj = {value: 10};

function increaseObject(obj){
    obj.value++;
}

increaseObject(obj);
console.log(obj);


//enumerating properties of an object
console.log("enumerating properties ----------------------");

for(let key in circle){
    console.log(key);
    console.log(circle[key])
}

// for-of loop is for iterables - like arrays, maps...
//it cannot be used for objects - object is not iterable

for (let key of Object.keys(circle)){
    console.log(key);
}

for (let entry of Object.entries(circle)){
    console.log(entry);
}

//check if a field is in the object:
if ("radius" in circle) console.log("yes");


//cloning an object: --------------------------
console.log("cloning an object ----------------------");

//1.enumerating over all the properties:
const copiedCircle = {};

for (let key in circle){
    copiedCircle[key] = circle[key];
}

console.log(copiedCircle);

//2.using Object.assign() function:
const copiedCircle2 = Object.assign({}, circle);

console.log(copiedCircle2);

//3.using spread operator:
const copiedCircle3 = {...circle};

console.log(copiedCircle3);

//built-in objects------------------------------
console.log("built-in objects ----------------------");


//Math object
console.log("Math object ----------------------");

console.log(Math.random()); // between 0 - 1

//String object
console.log("String object ----------------------");

let message = "hi"; //string primitive
console.log(typeof message);

const message2 = new String("hi");
console.log(typeof message2);

console.log(message.length);
console.log(message[0]);
console.log(message.includes('h'));
console.log(message.startsWith("hi"));
console.log(message.indexOf("hi"));
message = message.replace("hi","Hi"); //returns a new string
console.log(message);
message = message.toUpperCase(); //returns a new string
console.log(message);

//escape notations:
message = "\' \' \'";
console.log(message);

message = "This is my message";
let array = message.split(" ");
console.log(array);

//template literals
console.log("template literals ----------------------");

const name = "John";
const templateLiteralMsg =
`
Hi ${name},
Thank you for...
${5} messages

Regards
Tomas.
`;

console.log(templateLiteralMsg);

//date
console.log("date ----------------------");

let now = new Date();
console.log(now);

const date1 = new Date("May 11 2018 09:00");
console.log(date1);

const date2 = new Date(2018, 4, 11, 9); //year, month, day, hour
console.log(date2);

console.log(now.getDate()); //day of the month

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toDateString());
console.log(now.toISOString()); //for client - server communication