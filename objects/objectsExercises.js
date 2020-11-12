//1.)----------------------------------------------------
//object address:
//street, city, zipCode
//function to show the address in the console

let address = {
    street: "Lindegaardsvej",
    city: "Copenhagen",
    zipCode: 2920
};

function showAddress(address){
    console.log("Address:")
    for(let key in address){
        console.log(
            `${key}: ${address[key]}`
            );
    }
}

showAddress(address);



//2.) ---------------------------------------------

//To initialize an address object, use:
//a) factory function
//b) constructor function

//a) factory function
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
}

address = createAddress("Lindegaardsvej", "Copenhagen", 2920);
console.log(address);

//b) constructor function:
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

address = new Address("Lindegaardsvej", "Copenhagen", 2920);
console.log(address);



//3.)-----------------------------------------

//create 2 address objects using your constructor function.
//a) create a function areEqual to compare the 2 addresses.
// it should return true if all properties are equal
//b) create a function areSame - returns true if the 2 addresses are pointing to the same object.

let address1 = new Address("Lindegaardsvej", "Copenhagen", 2920);
let address2 = new Address("Svanemøllevej", "Copenhagen", 2100);

//a)
function areEqual(addr1, addr2){
    return addr1.street === addr2.street && 
    addr1.city === addr2.city &&
    addr1.zipCode === addr2.zipCode;
}

//b)
function areSame(addr1, addr2){
    return addr1 === addr2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

address3 = address1;
console.log(areSame(address1, address3));



//4.) ----------------------------------------
//create a blog post object with properties:
//title
//body
//author
//views
//comments ... each comment has properties author, body
//isLive ...true/false

//create an object like this with some data, it should have 2 comments

let post = {
    title: "title",
    body: "body",
    author: "authors name",
    views: 10,
    comments:[
        {author: "author1", body: "comment body"},
        {author: "author2", body: "comment body"}
    ],
    isLive: true
};

console.log(post);



//5.) ------------------------------------------

//we are building a blogging engine
//we need a constructor function for post object
//users will be drafting the posts, they will be published later
//show in console

//then simulate that the it was published
//and that it was viewed and twice commented.
//show in console

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

post = new Post("title", "body", "authors name");
console.log(post);

post.isLive = true;
post.views +=1;
post.comments.push({author: "authors name", body: "new comment"});
post.comments.push({author: "authors name", body: "new comment 2"});

console.log(post);



//6.)-----------------------------------------------------
//yelp.com , restaurants
//implement restaurant filtering by the price range
// show label $, $$, $$$
//show tooltip like inexpensive, moderate, expensive
//your task is to create the object for the filter

let priceRanges = [
    {label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10},
    {label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20},
    {label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50}
];

//filtering:
let restaurants = [
    {averagePerPerson: 5}
];