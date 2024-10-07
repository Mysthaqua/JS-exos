/* Exercice 19
Écrire une fonction compterLettreA.

Cette fonction prendra en paramètre une chaîne

Créer une boucle qui parcourt les lettres de la chaîne et compte le nombre de lettres égales à "a".

La fonction renverra un entier.

exemple : compterLettreA("abba") # résultat : 2

exemple : compterLettreA("mixer") # résultat : 0

Pour ce faire vous pourriez avoir besoin de chaine.length et de chaine[i] (ou l'équivalent chaine.charAt(i))*/

export default () => {
  const countLetterA = (str) => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "a") res++;
    }
    return res;
  };

  const str = prompt("Enter a value: ");
  console.log(`There is ${countLetterA(str)} a in ${str}.`);
};
