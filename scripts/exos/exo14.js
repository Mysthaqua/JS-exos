/* Exercice 14
Écrire une fonction qui prend en paramètre :
prénom
nom
Elle retournera une chaîne avec le prénom et le nom séparé d'un espace, exemple : "John Doe"
Vous afficherez ensuite le résultat de l'appel cette fonction dans la console*/

export default () => {
  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  };

  const firstName = prompt("Enter the first name: ");
  const lastName = prompt("Enter the last name: ");
  const fullName = getFullName(firstName, lastName);
  console.log(fullName);
};
