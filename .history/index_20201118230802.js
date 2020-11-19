const readline = require('readline-sync')
const robo = {
    text require{'.robots/text.js'}
}
function principal (){
    const content ={}

    content.termoBusca = retornoPesquisa()
    content.prefixo = retornoPrefixo()
    robo.text.content

    function retornoPesquisa (){
        return readline.question('Digite um termo da Wikipedia: ')
    }

    function retornoPrefixo(){
        const prefixos = ['Quem e ?','O que e ?', 'A historia de']
        const selecionarPrefixo = readline.keyInSelect(prefixos,'Selecione uma opcao: ')
        const selecionarPrefixoTexto = prefixos[selecionarPrefixo]

        return selecionarPrefixoTexto
   
    }

    console.log(content)
}

principal()