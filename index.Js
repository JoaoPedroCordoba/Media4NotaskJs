const n1 = prompt("Digite a Primeira nota");
const n2 = prompt("Digite a Segunda nota");
const n3 = prompt("Digite a Terceira nota");
const n4 = prompt("Digite a Quarta nota");

const resultado = (n1 + n2 + n3 + n4) / 4;

if(n1, n2, n3, n4 < 0)
{
    alert("Digite Numeros de 0 a 10");
} else{
    if(n1, n2, n3, n4 > 10)
    {
        alert("Digite Numeros de 0 a 10");
    } 
    else{
        if(resultado < 5)
        {
            alert("Reprovado");
        } 
        else{
            if(resultado > 6)
            {
                alert("Aprovado");
            } 
            else{
                alert("Recuperação");
            }
        }     
        
    } 
}