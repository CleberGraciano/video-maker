const readline = require('readline-sync')
const robots = {
    userInput: require('./robots/users-input.js')
    text: require('./robots/text.js')

}
function principal (){
    const content ={}
    robots.text(content)
    robots.userInput(content)



    console.log(content)
}

principal()