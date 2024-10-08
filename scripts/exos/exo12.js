/* Exercice 12
Réaliser un programme permettant à l'utilisateur d'entrer comme données :
Une population initiale.
Un taux d'accroissement
Une population visée.
Ce programme permettra à l'utilisateur de savoir en combien de temps la population visée sera atteinte.
Exemple :

Saisir la population : 40000
Saisir le taux (%) : 2
Saisir la population visée : 80000
La population dépasse la population visée à l'année 36 (81595 habitants)*/

export default () => {
  let pop = prompt("Enter the population: ");
  const growthRate = prompt("Enter the rate (%): ");
  const goalPop = prompt("Enter the goal population: ");

  let cpt = 0;
  while (pop < goalPop) {
    pop *= 1 + growthRate / 100;
    cpt++;
  }
  console.log(
    `The population will reach the goal in ${cpt} years (${parseInt(
      pop
    )} inhabitants).`
  );
};
