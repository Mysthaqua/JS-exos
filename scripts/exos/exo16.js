/* Exercice 16
Écrire une fonction quelleHeure.
Cette fonction aura un paramètre heure de type string.
Ce paramètre aura "12h00" comme valeur par défaut.
La fonction ne retournera aucun résultat mais affichera l'heure
exemple : quelleHeure() => "il est 12h00"
exemple : quelleHeure("14h00") => "il est 14h00"*/

export default () => {
  const whatHour = (hour = "12:00") => {
    console.log(`It's ${hour}`);
  };

  whatHour();
  const hour = prompt("Enter an hour (hh:mm): ");
  whatHour(hour);
};
