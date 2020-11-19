const readline = require('readline-sync')
const robots = {

    text: require('./robots/text.js')

}
async function principal (){
    const content ={}

    content.termoBusca = retornoPesquisa()
    content.prefixo = retornoPrefixo()
    await robots.text(content)

    function retornoPesquisa (){
        return readline.question('Digite um termo da Wikipedia: ')
    }

    function retornoPrefixo(){
        const prefixos = ['Who is it ?','Which is ?', 'The history of']
        const selecionarPrefixo = readline.keyInSelect(prefixos,'Selecione uma opcao: ')
        const selecionarPrefixoTexto = prefixos[selecionarPrefixo]

        return selecionarPrefixoTexto
   
    }

    // console.log(content)
}

principal()