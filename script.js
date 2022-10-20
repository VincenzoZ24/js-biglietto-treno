// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// va applicato uno sconto del 40% per gli over 65.



let kmDaFare = prompt("Quanti km devi fare?");
console.log("km da percorrere", kmDaFare);
let eta = prompt("quanti anni hai?");
console.log("età", eta);
let prezzoBiglietto = kmDaFare * "0.21";
console.log("prezzo biglietto", prezzoBiglietto , "euro");
if (eta < 18) {
    let sconto1 = (prezzoBiglietto * 0.2);
    let prezzo1 = (prezzoBiglietto - sconto1);
    let prezzoScontato1 = prezzo1.toFixed(2);
    console.log("sconto minorenni ", prezzoScontato1, "euro");
}
else if (eta > 65) {
    let sconto2 = (prezzoBiglietto * 0.4);
    let prezzo2 =(prezzoBiglietto - sconto2);
    let prezzoScontato2 = prezzo2.toFixed(2);
    console.log("sconto over 65", prezzoScontato2, "euro");
    
}