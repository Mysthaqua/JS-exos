/* Exercice 11
On dispose d'une feuille de papier d'épaisseur 0.1 mm.
Combien de fois doit-on la plier au minimum pour que l'épaisseur dépasse 400m ?
Écrire un programme pour résoudre ce problème.
Une fois fini, aborder le problème à l'inverse.
Combien de fois doit-on déplier une feuille de 400m au minimum pour que l'épaisseur dépasse 0.1mm.*/

export default () => {
  let thickness = 0.0001;
  let folds = 0;
  while (thickness < 400) {
    thickness *= 2;
    folds++;
    console.log("fold", folds, "thickness", thickness);
  }

  console.log("----------");

  thickness = 400;
  folds = 0;
  while (thickness > 0.0001) {
    thickness /= 2;
    folds++;
    console.log("fold", folds, "thickness", thickness);
  }
};
