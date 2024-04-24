function carregarMoedas(){

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD,BTC-BRL",false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)
    const moedas = resposta
    const moedaUSDBRL = moedas.USDBRL
    const moedaBTCUSD = moedas.BTCUSD
    const moedaBTCBRL = moedas.BTCBRL
       
        adicionarMoedas(moedaUSDBRL)
        adicionarMoedas(moedaBTCUSD)
        adicionarMoedas(moedaBTCBRL)
    }
   
function adicionarMoedas(moeda){

    const textoElemento = document.createElement("div")
    textoElemento.innerHTML = 
        moeda.name + 
        ", " + moeda.bid
       

    const divElemento = document.getElementById("cotacao-moedas")
    divElemento.appendChild(textoElemento)
    
}