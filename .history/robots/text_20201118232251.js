function robot(content){
   
    fetchContentFromWikipidia(content)
    sanitizeContent(content)
    breakContentIntoSentences(content)


}

module.exports = robot