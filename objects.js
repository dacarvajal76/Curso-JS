//Objects

var person = {
    firstName: "Jamila",
    age: 21,
    isHuman: true,
    balance: 100.32,
    dob: new Date(2000, 0, 30).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }
};

console.log("First name" + ": " + person.firstName);
console.log("Age" + ": " + person.age);
console.log("Balance " + ": " + person.balance);
console.log("City" + ": " + person.address.city);
console.log("Postal Code" + ": " + person.address.postCode);

console.log("");

console.log(Object.keys(person));

console.log("");

console.log(Object.values(person));

console.log("");

console.log(JSON.stringify(person));