let at = (prompt("Digite sua nota de AT"))
let ac = (prompt("Digite sua nota de AC")) 
let agh =  (prompt("Digite sua nota de AGH"))
let valorFinal;
valorFinal = (at*5)+(ac*3)+(agh*2)
valorFinal = valorFinal/10
alert('Sua nota nesse bimestre foi: ' + (valorFinal))
if(valorFinal < 6){
    document.write("c é burro hein fi")
}
else{
    document.write("parabueins, n fez mais que sua obrigação")
}