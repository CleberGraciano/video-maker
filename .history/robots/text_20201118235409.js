const algorithmia= require('algorithmia')
const algorithmiaKey = require('../credentials/algorithmia.json').apiKey
function robot(content){
   
    baixarConteudoWikipedia(content)
    // limparConteudo(content)
    // quebrarEmSentencas(content)

   function baixarConteudoWikipedia(content){
       const instanciaAutenticadaalgorithimia = algorithmia('sim8dXd2AGluzoUnlEaVdouSRGc1') // autentica
       const Wikipediaalgorithim = instanciaAutenticadaalgorithimia.algo('web/WikipediaParser/0.1.2') //define o algoritimo
       const WikipediaResponse = Wikipediaalgorithim.pipe(content.termoBusca) // executa o algoritimo
       WikipediaContent = WikipediaResponse.get() // retorna o valor
       console.log(WikipediaContent)

   }


}

module.exports = robot