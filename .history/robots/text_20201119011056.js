const algorithmia= require('algorithmia')

const algorithmiaKey = require('../credentials/algorithmia.json').apiKey
async function robot(content){
   
    await baixarConteudoWikipedia(content)
    limparConteudo(content)
    // quebrarEmSentencas(content)


   async function baixarConteudoWikipedia(content){
       const instanciaAutenticadaalgorithimia = algorithmia(algorithmiaKey) // autentica
       const Wikipediaalgorithim = instanciaAutenticadaalgorithimia.algo('web/WikipediaParser/0.1.2?timeout=300') //define o algoritimo
       const WikipediaResponse = await Wikipediaalgorithim.pipe(content.termoBusca) // executa o algoritimo
       WikipediaContent = WikipediaResponse.get() // retorna o valor

       content.sourceContentOriginal=WikipediaContent.content
    //    console.log(WikipediaContent)

   }

   function limparConteudo(content) {
       const quebrarLinhasVazias = removerLinhasVazias(content.sourceContentOriginal)  
       const semMarkdown = removerMarkdown(content.quebrarLinhasVazias)
        console.log(quebrarLinhasVazias)
        
       function removerLinhasVazias(texto) {
           const todasLinhas = texto.split('\n')
           const quebrarLinhasVazias = todasLinhas.filter((line) => {
              if(line.trim().length === 0){
                  return false
              }
              return true
          })
          return quebrarLinhasVazias
       }

       function removerMarkdown(){
           
       }
   }
}

module.exports = robot