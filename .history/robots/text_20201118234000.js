const algorithmia= require('algorithmia')
function robot(content){
   
    baixarConteudoWikipedia(content)
    // limparConteudo(content)
    // quebrarEmSentencas(content)

   function baixarConteudoWikipedia(content){
       const algorithimiaAuthenticated = algorithimia('API KEY TEMPORARIA')
       const Wikipediaalgorithim = algorithimiaAuthenticated.algo('web/WikipediaParser/0.1.2')

   }


}

module.exports = robot