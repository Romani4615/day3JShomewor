//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
let person = {}
person.name = "Aaron"
person.age = 29
console.log(person.name, person.age)
const people = (() => {
    let year = person.age
    console.log('schmackin')
    const addingAge = () => {return year++}
    return addingAge
})()
console.clear()
people()
console.log(person.age)
///////››››››››››››››››‹‹‹‹‹‹‹‹‹‹‹‹‹‹››››››››››››››››››‹‹‹‹‹‹‹‹‹‹‹‹‹‹‹››››››››››››‹‹‹‹‹‹‹‹‹‹
class Peoples {
    constructor(name, age){
    this.name = name
    this.age = age
}
    agingNormally=()=>{
        console.log(`${this.name} is old af, but he's aging normally`)
        this.age += 1
        console.log(`He's in denial that he's ${this.age}`)
    }   
    crazyAging=()=>{
            console.log(`${this.name} is young af, but she's aging at an alarming rate and refuses to go to the doctors!?`)
            this.age += 3
            console.log(`Oh great, you called the function and now she's ${this.age}`)
    }
    printInfo=()=>{
                console.log(`${this.name}, ${this.age}`)
    }
}
const aaron = new Peoples('Aaron', 29)
console.log(aaron.agingNormally())
const bridget = new Peoples('Bridget', 25)
console.log(bridget.crazyAging())
console.log(aaron.printInfo())
console.log(bridget.printInfo())


// =============Exercise #2 ============//
/*
    Create a Promised based function that will check a string 
    to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small word"
*/
const greater10 = (len) => {
    return new Promise((resolve, reject) => {
        if(len.length >= 10){
            resolve(true)
        }else{
            reject(false)
        }

    })
}
async function hellaWords(len){
    try {
        await greater10(len);
        console.log("This big son of a gun, leme tell ya, definitley bigger than 10 letters BIG WORD ");
    }catch (reject){
        console.log('lil word havin ass, no length havin ass SMALL WORD BRUH')
    }
}
//console.log(hellaWords('YomyfellowProgrammers, what is popping?'))


const bigWord = () => {
    console.log("This big son of a gun, leme tell ya, definitley bigger than 10 letters" + "BIG WORD ")
}
const lilWord = () => {
    console.log('lil word havin ass, no length havin ass SMALL WORD BRUH ')
}
const getDaWord = () => {
    words = prompt('Here are your options, 1. ENTER BIG WORD/WORDS  2. ENTER BABY WORD/WORDS.')
    greater10().then(bigWord()).catch(lilWord())
}
getDaWord()





// const isEvenNum = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0){
//             resolve(true);
//         }else{
//             reject(false);
//         }

//     })
// }
// const handleSuccess = (result) =>{
//     console.log('This was a success and here is the result: '+ result)
// }
// const handleFail = (err) =>{
//     console.log('fail' + err)
// }

// const getNumber = () => {
//     num = prompt('Please enter a number')
//     isEvenNum(num).then(handleSucess).catch(handleFail);
// }
// isEvenNum(2)