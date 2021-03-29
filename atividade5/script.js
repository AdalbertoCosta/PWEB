alert("Nome e média do aluno");
let nome;
nome = prompt('Qual é o seu nome?');
let nota1, nota2, nota3, media;
nota1 = prompt('Qual a primeira nota?');
nota1 = +nota1 ;
console.log(typeof nota1);
nota2 = prompt('Qual a segunda nota?');
console.log(nota2);
nota2 = +nota2 ;
console.log(typeof nota2);
nota3 = prompt('Qual a terceira nota?');
console.log(nota3);
nota3 = +nota3 ;
console.log(typeof nota3);
media = (nota1 + nota2 + nota3)/3 ;
console.log(media);
alert(`${nome} ficou com ${media} de media`);





