/* Exercice 15
Écrire la fonction "soustraire" qui prend en paramètre :
nombre a
nombre b
Elle retournera un entier qui sera la soustraction de ces deux nombres
exemple : resultat = soustraire(2, 1) resultat = 1
De plus, lors de l'exécution, la fonction affichera "Je soustrais 2 et 1"
Vous afficherez ensuite le résultat de l'appel cette fonction dans la console*/

export default () => {
  const subtract = (a, b) => {
    console.log(`I subtract ${b} to ${a}`);
    return a - b;
  };

  const a = prompt("Enter the first value: ");
  const b = prompt("Enter the second value: ");
  const res = subtract(a, b);
  console.log(`Result: ${res}`);
};
