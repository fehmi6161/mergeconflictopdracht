//function student1Haiku()

const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()



function basicHaiku()
{
return ["Hello luigi","We saw a dong descending","On a day in fall."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()