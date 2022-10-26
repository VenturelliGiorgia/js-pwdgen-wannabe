
//inserimento dati dell'utente
const name = prompt("Inserisci il tuo nome");
const username = prompt("Inserisci il tuo cognome");
const color = prompt("Inserisci il tuo colore preferito");
//stampa della password tramite il paragrafo
const paragrafo = document.getElementById("paragrafo");
paragrafo.innerHTML = `<strong>${name}${username}${color}21 </strong>`;
