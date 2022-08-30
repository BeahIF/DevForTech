// fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta=>{
//     //console.log(resposta.json());
//     return resposta.json();
// }).then(corpo=>{
//     document.getElementById("valor").innerHTML=corpo.USDBRL.low;
//     document.getElementById("retorno").innerHTML=corpo.USDBRL.name;
    
// })

$(function(){
    async function buscaCep(){
    let cep = $("#txtCep").val()
    let caminho = `https://api.postmon.com.br/v1/cep/`+cep

    fetch(caminho).then(retorno_cep=>{
   return retorno_cep.json()
   
        }).then(corpo=>{   
            console.log(corpo)
             document.getElementById("endereco").innerHTML=corpo.logradouro;
            document.getElementById("bairro").innerHTML=corpo.bairro;
            document.getElementById("cep").innerHTML=corpo.cep;
            document.getElementById("estado").innerHTML=corpo.estado;
            document.getElementById("cidade").innerHTML=corpo.cidade;
        })

        return true;
        }


        
    $("#btnSalvar").on("click",function(){
        return buscaCep();
    })
})