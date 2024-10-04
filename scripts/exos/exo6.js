/* Exercice 06
Écrire un programme qui permet de tester si un profil est valable pour une candidature ou non selon ces trois critères :
L'âge minimum pour le poste est 30 ans
Le salaire maximum possible est 40 000 euros.
Le nombre d'années d'expérience minimum est de 5 ans.
On affichera différents messages pour chaque condition non respectée.
Il est possible de réaliser cet exercice avec une seule structure conditionnelle ne comportant qu'une condition par clause (pas de and/or)*/

const exo6 = () => {
  // const age = prompt("Enter your age: ");
  // const salary = prompt("Enter your max possible salary: ");
  // const exp = prompt("Enter the number of years of experience you have: ");

  if (prompt("Enter your age: ") < 30) {
    console.log("You must be at least 30.");
  } else if (prompt("Enter your max possible salary: ") > 40000) {
    console.log("You must have a max possible salary of 40,000€.");
  } else if (prompt("Enter the number of years of experience you have: ") < 5) {
    console.log("You must have at least 5 years of experience.");
  } else {
    console.log("You are eligible !");
  }
};

export default exo6;
