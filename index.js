//Pour demander et Affiché votre nom
function nom() {
    let nom = prompt("Quel est votre nom ?");
alert("Bonjour " + nom);
}

//Pour additionner deux nombres
function addition() {
    let nombre1 = parseInt(prompt("Saisissez le premier nombre :"));
let nombre2 = parseInt(prompt("Saisissez le deuxième nombre :"));
let somme = nombre1 + nombre2;
alert("La somme de " + nombre1 + " et " + nombre2 + " est égale à " + somme + ".");
}

//Pour Afficher la table de mitiplication saisir par un utilisateur
function multi() {
    let nombre = parseInt(prompt("Saisissez un nombre :"));
let resultat = "";
for (let i = 1; i <= 10; i++) {
  resultat += nombre + " x " + i + " = " + (nombre * i) + "\n";
}
alert(resultat);
}


//Pour calculer la racine carré d'un nombre
function carre() {
    let nombre = parseInt(prompt("Saisissez un nombre :"));
let racineCarree = Math.sqrt(nombre);
alert("La racine carrée de " + nombre + " est égale à " + racineCarree + ".");
}

//Programme pour calculer le factorielle d'un nombre saisi par l'utilisateur :
function factorielle() {
    let nombre = parseInt(prompt("Saisissez un nombre :"));
let factorielle = 1;
for (let i = 2; i <= nombre; i++) {
  factorielle *= i;
}
alert("Le factorielle de " + nombre + " est égal à " + factorielle + ".");


}

//Appel des function
nom();
addition();
multi();
carre();
factorielle();