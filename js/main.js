var nome = prompt("Qual'è il tuo nome?");
var cognome = prompt("Qual'è il tuo cognome?");
var colorePreferito = prompt("Qual'è il tuo colore preferito?");
var generator = nome + cognome + colorePreferito + '20';
document.getElementById('password').innerHTML = generator;
