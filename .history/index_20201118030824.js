function start (){
    const content ={}

    content.termoBusca = retornoPesquisa()

    function retornoPesquisa (){
        return 'Texto exemplo'
    }

    console.log(content)
}

start()