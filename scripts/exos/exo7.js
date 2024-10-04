/* Exercice 07
Faire un programme permettant de compter de 1 à 10 avec la boucle for puis avec la boucle while.

Je commence à compter :
   1
   2
   3
   4
   5
   6
   7
   8
   9
   10
Fin du compte !*/

export default () => {
  console.log("[FOR] Counting started:");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log("[FOR] Counting ended!");

  console.log("[WHILE] Counting started:");
  let i = 1;
  while (i <= 10) {
    console.log(i++);
  }
  console.log("[WHILE] Counting ended!");
};
