const algorithmia= require('algorithmia')
function robot(content){
   
    baixarConteudoWikipedia(content)
    // limparConteudo(content)
    // quebrarEmSentencas(content)

   function baixarConteudoWikipedia(content){
       const instanciaAutenticadaalgorithimia = algorithmia('API KEY TEMPORARIA')
       const Wikipediaalgorithim = instanciaAutenticadaalgorithimia.algo('web/WikipediaParser/0.1.2')
       const WikipediaResponse = Wikipediaalgorithim.pipe(content.termoBusca)
       WikipediaContent = WikipediaResponse.get()
       console.log(WikipediaContent)

   }


}

module.exports = robot