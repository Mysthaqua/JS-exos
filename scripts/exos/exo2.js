/* Exercice 02
Réalisez un programme permettant d'obtenir la somme de deux variables numérique
Les deux nombres à additionner sont issus de saisies utilisateur
Proceder à l'addition des 2 variables
Afficher le résulat de l'opération sous la forme nb1 + nb2 = resultat*/

const exo2 = () => {
  const a = prompt("Enter the first value: ");
  const b = prompt("Enter the seconde value: ");
  console.log(`${a} + ${b} = ${a + b}`);
};

export default exo2;
