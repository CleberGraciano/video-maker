const readline = require('readline-sync')
function start (){
    const content ={}

    content.termoBusca = retornoPesquisa()
    content.prefixo = retornoPrefixo()

    function retornoPesquisa (){
        return readline.question('Digite um termo da Wikipedia: ')
    }

    function retornoPrefixo(){
        const prefixos = ['Quem é ?','O que é ?', 'texto2', 'texto3']
        const selecinarPrefixo = readline.keyInSelect(prefixos,'Selecione uma opção: ')
        console.log(selecinarPrefixo)
    }

    console.log(content)
}

start()