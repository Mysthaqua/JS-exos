// Exercice 01
// Demander à l'utilisateur son nom et ensuite son prénom
// Afficher un message Bonjour Nom utilisateur Prenom utilisateur !!! dans la console et avec une fenetre.

const lastName = prompt("What's your last name ? ");
const firstName = prompt("What's your first name ? ");
const message = `Hello ${lastName} ${firstName}`;
console.log(message);
alert(message);

// Exercice 02
// Réalisez un programme permettant d'obtenir la somme de deux variables numérique
// Les deux nombres à additionner sont issus de saisies utilisateur
// Proceder à l'addition des 2 variables
// Afficher le résulat de l'opération sous la forme nb1 + nb2 = resultat

const a = prompt("Enter the first value: ");
const b = prompt("Enter the seconde value: ");
console.log(`${a} + ${b} = ${a + b}`);

// Exercice 03
// Écrire un programme qui, à partir de la saisie d'un rayon et d'une hauteur, calcule le volume d'un cône droit
// 𝑉 = 13*𝜋*𝑟*ℎ

const r = prompt("Enter the radius: ");
const h = prompt("Enter the height: ");
const V = 13 * Math.PI * r * h;
console.log(`Volume of the cone: ${V}`);
