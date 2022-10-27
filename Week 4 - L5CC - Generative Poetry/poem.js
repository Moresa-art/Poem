// this is a function to return a random element from an array
function randomElementFromArray(inputArray){
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
}

let openingLine = "On a dark winter's night"
let pronouns = ["i", "we", "they","he", "she"]
let verbs = ["conjoured","ate", "walk","slept"]
let adverbs = ["slowly", "quickly", "wildly", "quietly", "loudly" ]


let pronoun = randomElementFromArray(pronouns)
let verb = randomElementFromArray (verbs)
console.log(openingLine)
console.log(pronoun)
console.log(verb)
let adverb = randomElementFromArray (adverbs)
console.log(adverb)

let wholepoem = openingLine + " " + pronoun + " " + verb + " " + adverb
console.log(wholepoem)

document.getElementById("para").innerHTML = wholepoem
document.getElementById("paratwo").innerHTML = adverb + " "+ pronoun + " " + verb

let longPoem = ""

for(let i = 0; i < 10; i++){
    let pronoun = randomElementFromArray(pronouns)
    let verb = randomElementFromArray (verbs)
    let adverb = randomElementFromArray (adverbs)
    longPoem += openingLine + " " + pronoun + " " + verb + " " + adverb
    longPoem+= "<br>"
}
     
document.getElementById("para").innerHTML = longPoem