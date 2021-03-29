alert('Esolha entre pedra papel e tesoura');
let escolha, escolhaComputador, mostrareEscolhaHumano, mostrareEscolhaPC;
escolha = prompt('');
escolha= +escolha;
if(escolha == 1){
 mostrareEscolhaHumano = 'pedra'
}
else if (escolha ==2){
    mostrareEscolhaHumano='papel'
}
else if (escolha ==3){
    mostrareEscolhaHumano='tesoura'
}
escolhaComputador = Math.random()*10;
if (escolhaComputador >0 && escolhaComputador<3.3333333){
    escolhaComputador=1;
}
else if (escolhaComputador >3.33333 && escolhaComputador<6.6666666){
    escolhaComputador=2;
}
else if (escolhaComputador >6.6666666&& escolhaComputador<9.99999999){
    escolhaComputador=3;
}
if(escolhaComputador ==1){
    mostrareEscolhaPC = 'pedra'
}
else if(escolhaComputador ==2){
    mostrareEscolhaPC = 'papel'
}
else if(escolhaComputador ==3){
    mostrareEscolhaPC = 'tesoura'
}
if (escolhaComputador == escolha){ 
alert(`Voce escolheu ${mostrareEscolhaHumano} e compuatador ${mostrareEscolhaPC}`);
alert('empate');
}
else if(escolhaComputador==1 && escolha==2){
    alert(`Voce escolheu ${mostrareEscolhaHumano} e compuatador ${mostrareEscolhaPC}`);
    alert('humano ganhou');
}
else if(escolhaComputador==1 && escolha==3){
    alert(`Voce escolheu ${mostrareEscolhaHumano} e compuatador ${mostrareEscolhaPC}`);
    alert('computador ganhou');
}
else if(escolhaComputador==2 && escolha==1){
    alert(`Voce escolheu ${mostrareEscolhaHumano} e compuatador ${mostrareEscolhaPC}`);
    alert('computador ganhou');
}
else if(escolhaComputador==2 && escolha==3){
    alert(`Voce escolheu ${mostrareEscolhaHumano} e compuatador ${mostrareEscolhaPC}`);
    alert('humano ganhou');
}
else if(escolhaComputador==3 && escolha==1){
    alert(`Voce escolheu ${mostrareEscolhaHumano} e compuatador ${mostrareEscolhaPC}`);
    alert('humano ganhou');
}
else if(escolhaComputador==3 && escolha==2){
    alert(`Voce escolheu ${mostrareEscolhaHumano} e compuatador ${mostrareEscolhaPC}`);
    alert('computador ganhou');
}

