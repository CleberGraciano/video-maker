const algorithmia = require('algorithmia')
const sentenceBoundaryDetection = require('sbd')

const algorithmiaKey = require('../credentials/algorithmia.json').apiKey
async function robot(content){
   
    await baixarConteudoWikipedia(content)
    limparConteudo(content)
    quebrarEmSentencas(content)


   async function baixarConteudoWikipedia(content){
       const instanciaAutenticadaalgorithimia = algorithmia(algorithmiaKey) // autentica
       const Wikipediaalgorithim = instanciaAutenticadaalgorithimia.algo('web/WikipediaParser/0.1.2?timeout=300') //define o algoritimo
       const WikipediaResponse = await Wikipediaalgorithim.pipe(content.termoBusca) // executa o algoritimo
       WikipediaContent = WikipediaResponse.get() // retorna o valor

       content.sourceContentOriginal=WikipediaContent.content
    //    console.log(WikipediaContent)

   }

   
   function limparConteudo(content) {
       const quebrarLinhasVaziasMarkdown = removerLinhasVaziasMarkdown(content.sourceContentOriginal)
       const datasParentes = removerDatasParenteses(quebrarLinhasVaziasMarkdown) 

       content.sourceContentSanatized = datasParentes
        
       function removerLinhasVaziasMarkdown(texto) {
           const todasLinhas = texto.split('\n')
           const quebrarLinhasVaziasMarkdown = todasLinhas.filter((linha) => {
              if(linha.trim().length === 0 || linha.trim().startsWith('=')){
                  return false
              }
              return true
          })
          return quebrarLinhasVaziasMarkdown.join(' ')
       }

       function removerDatasParenteses(text){
           return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g,' ')
       }
   }

   function quebrarEmSentencas(content){
       content.sentences = []
       const sentences = sentenceBoundaryDetection.sentences(content.sourceContentSanatized)
       sentences.forEach((sentence) => 

   }
}

module.exports = robot