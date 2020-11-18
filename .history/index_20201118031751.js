const readline = require('readline-sync')
function start (){
    const content ={}

    content.termoBusca = retornoPesquisa()
    content.prefixo = retornoPrefixo()

    function retornoPesquisa (){
        return readline.question('Digite um termo da Wikipedia: ')
    }

    console.log(content)
}

start()