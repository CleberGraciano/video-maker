const algorithmia= require('algorithmia')
function robot(content){
   
    baixarConteudoWikipedia(content)
    // limparConteudo(content)
    // quebrarEmSentencas(content)

   function baixarConteudoWikipedia(content){
       const instanciaAutenticadaalgorithimia = algorithimia('API KEY TEMPORARIA')
       const Wikipediaalgorithim = instanciaAutenticadaalgorithimia.algo('web/WikipediaParser/0.1.2')
       const WikipediaResponde = Wikipediaalgorithim.pipe(content.buscarTermo)

   }


}

module.exports = robot