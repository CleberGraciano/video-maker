const algorithmia= require('algorithmia')
const algorithmiaKey = require('../credentials/algorithmia.json').apiKey
function robot(content){
   
    baixarConteudoWikipedia(content)
    // limparConteudo(content)
    // quebrarEmSentencas(content)

    console.log
   async function baixarConteudoWikipedia(content){
       return 'RESULTADO DA PRIMISE'
       const instanciaAutenticadaalgorithimia = algorithmia(algorithmiaKey) // autentica
       const Wikipediaalgorithim = instanciaAutenticadaalgorithimia.algo('web/WikipediaParser/0.1.2') //define o algoritimo
       const WikipediaResponse = Wikipediaalgorithim.pipe(content.termoBusca) // executa o algoritimo
       WikipediaContent = WikipediaResponse.get() // retorna o valor
       console.log(WikipediaContent)

   }


}

module.exports = robot