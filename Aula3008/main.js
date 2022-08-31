
// })

$(function(){
    async function buscaCep(){
    let numero = $("#salmo").val()
    let caminho = `https://www.abibliadigital.com.br/api/verses/nvi/sl/
    `+numero

    fetch(caminho).then(retorno=>{
   return retorno.json()
   
        }).then(corpo=>{   
let resultado =""
            console.log(corpo)
             document.getElementById("nome").value=corpo.book.name;
            document.getElementById("autores").value=corpo.book.author;
            document.getElementById("grupo").value=corpo.book.group;
            corpo.verses.forEach((element, index) => {
//                 console.log(element)
//                 console.log(index)
//                 resultado = resultado + "Verso"+index+" "+element.text+" <br>"
// console.log(resultado)
document.getElementById("versus").value=element.text;

});
            // document.getElementById("versus").value=resultado;

        })

        return true;
        }


        
    $("#btnSalvar").on("click",function(){
        return buscaCep();
    })
})