/* Exercice 01
Demander à l'utilisateur son nom et ensuite son prénom
Afficher un message Bonjour Nom utilisateur Prenom utilisateur !!! dans la console et avec une fenetre.*/

export default () => {
  const lastName = prompt("What's your last name ? ");
  const firstName = prompt("What's your first name ? ");
  const message = `Hello ${lastName} ${firstName}`;
  console.log(message);
  alert(message);
};
