/* Exercice 03
Écrire un programme qui, à partir de la saisie d'un rayon et d'une hauteur, calcule le volume d'un cône droit
𝑉 = 13*𝜋*𝑟*ℎ*/

export default () => {
  const r = prompt("Enter the radius: ");
  const h = prompt("Enter the height: ");
  const V = 13 * Math.PI * r * h;
  console.log(`Volume of the cone: ${V.toFixed(2)}`);
};
