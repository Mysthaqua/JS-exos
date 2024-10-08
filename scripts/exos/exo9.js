/* Exercice 09
Écrire un programme qui affiche les tables de multiplication de 1 à N.

N : est un entier supérieur à 0 saisie par l'utilisateur.

/!\ Une table va de 1 à 10.

Premier style d'affichage demandé :

Table des 1 :
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
...
1 x 10 = 10

Table des 2 :
2 x 1 = 1
2 x 2 = 2
2 x 3 = 3
...
2 x 10 = 20

...

Table des N :
N x 1 = 1
N x 2 = 2
N x 3 = 3
...
N x 10 = 20

Deuxième style d'affichage demandé :

   1   2   3   4   5   6   7   8   9   10
-----------------------------------------
   1   2   3   4   5   6   7   8   9   10
   2   4   6   8  10  12  14  16  18   20
...
   N  2N  3N  .....*/

export default () => {
  const N = prompt("Enter a value: ");
  for (let i = 1; i <= N; i++) {
    console.log("Table of 1:");
    for (let j = 1; j <= 10; j++) {
      console.log(`\t${i} x ${j} = ${i * j}`);
    }
  }

  let str = "";
  let separation = "";
  for (let j = 1; j <= 10; j++) {
    str += `${j}`.padStart(4);
    separation += "-".repeat(j.toString().length + 3);
  }
  console.log(str);
  console.log(separation);
  for (let i = 1; i <= N; i++) {
    let str = "";
    for (let j = 1; j <= 10; j++) {
      str += `${i * j}`.padStart(4);
    }
    console.log(str);
  }
};
