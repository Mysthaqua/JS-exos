/* Exercice 21
Demander à l’utilisateur le nombre de chiffre que comportera un tableau
Le programme générera aléatoirement des nombres entre 1 et 50 pour remplir les cellules de ce tableau.
Enfin votre programme vérifiera s’ils sont pair ou impair puis les affichera sous cette forme :
Le nombre 30 est   pair.
Le nombre 31 est impair.
Le nombre  5 est impair.
Le nombre 12 est   pair.*/

export default () => {
  const randomArray = (nb) => {
    const arr = [];
    for (let i = 0; i < nb; i++) {
      arr.push(parseInt(Math.random() * 100));
    }
    return arr;
  };
  const evenOrOdd = (arr) => {
    arr.forEach((val) => {
      console.log(
        `The number ${val.toString().padStart(2)} is ${
          val % 2 == 0 ? "even" : "odd".padStart(4)
        }.`
      );
    });
  };

  const nb = prompt("How many values ?");
  const arr = randomArray(nb);
  evenOrOdd(arr);
};
