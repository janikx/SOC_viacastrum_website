var numberone = Number(prompt("Zadaj cislo:"));
var numbertwo = Number(prompt("Zadaj druhe cislo:"));
var sign = prompt("Zadaj znak:");

if (sign == "+") {
    console.log("Vysledok scitania: " + numberone + numbertwo);
} else if (sign == "-") {
    console.log("Vysledok odcitania: " + numberone - numbertwo);
} else if (sign == "*") {
    console.log("Vysledok nasobenia: " + numberone * numbertwo);
} else if (sign == "/") {
    console.log("Vysledok delenia: " + numberone / numbertwo);
} else {
    console.log("Nie je mozne vyriesit tento problem.");
}