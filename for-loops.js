//for Loops

var names = [
    "Alex", 
    "Jamila", 
    "Joe", 
    "Aisha",
    "Bob"
]

for(var i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log()

for (const name of names) {
    console.log(name)
}

console.log()

names.forEach(function(name){
    console.log(name)
})