/* Exercice 10
Écrire un programme qui permet d'afficher un triangle isocèle formé d'étoiles *.

La hauteur du triangle (le nombre de lignes) sera saisie.

Il existe plusieurs méthodes pour arriver au même résultat.

Exemple pour 5 lignes

    *
   ***
  *****
 *******
**********/

const exo10 = () => {
  const height = prompt("Enter the height: ");
  for (let i = 0; i < height; i++) {
    console.log(" ".repeat(height - i - 1) + "*".repeat(i * 2 + 1));
  }
};

export default exo10;
