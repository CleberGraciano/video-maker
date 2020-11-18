const readline = require('readline-sync')
function start (){
    const content ={}

    content.termoBusca = retornoPesquisa()
    content.prefixo = retornoPrefixo()

    function retornoPesquisa (){
        return readline.question('Digite um termo da Wikipedia: ')
    }

    function retornoPrefixo(){
        const prefixos = ['Quem e ?','O que e ?', 'A historia de']
        const selecionarPrefixo = readline.keyInSelect(prefixos,'Selecione uma opção: ')
        const selecionarPrefixoTexto = prefixos[selecionarPrefixo]
        
        console.log(selecionarPrefixoTexto)
    }

    console.log(content)
}

start()