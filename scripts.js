
function sortear(){

    const numbUm =  Math.ceil(document.querySelector(".ipt1").value)
    const numbDois = Math.floor(document.querySelector(".ipt2").value)

if(numbDois <= numbUm){
    
    alert("O valor máximo precisa ser MAIOR que o valor mínimo")
}
else{
    const  result = Math.floor(Math.random() * (numbDois - numbUm + 1) + numbUm)

    alert(result)}
}
