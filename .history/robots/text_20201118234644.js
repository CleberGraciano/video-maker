const algorithmia= require('algorithmia')
function robot(content){
   
    baixarConteudoWikipedia(content)
    // limparConteudo(content)
    // quebrarEmSentencas(content)

   function baixarConteudoWikipedia(content){
       const instanciaAutenticadaalgorithimia = algorithmia('API KEY TEMPORARIA')
       const Wikipediaalgorithim = instanciaAutenticadaalgorithimia.algo('web/WikipediaParser/0.1.2')
       const WikipediaResponde = Wikipediaalgorithim.pipe(content.termoBusca)
       WikipediaContent = WikipediaResponde.get()
       console.log(WikipediaContent)

   }


}

module.exports = robot