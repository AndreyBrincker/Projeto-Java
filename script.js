

function resultado(){

let nome = document.getElementById("nome").value;

let n1 = Number(document.getElementById("nota1").value);

let n2 = Number(document.getElementById("nota2").value);

let media = (n1 + n2) / 2;

 document.getElementById("resultado").innerHTML =
                "A média de " + nome + " é: " + media.toFixed(2);

}
