/* Exercice 04
Écrire un programme qui, à partir de la saisie de l'âge de l'utilisateur, affiche True s'il est majeur et False s'il est mineur (sans structure conditionnelle if).*/

const exo4 = () => {
  const age = prompt("Enter your age: ");
  console.log(age >= 18 ? "You are major" : "You are minor");
};

export default exo4;
