/* Exercice 18
Écrire une fonction javascript qui vérifie une chaîne est un palindrome ou non, indépendamment des espaces
On rappelle qu’une chaîne de caractères, un mot, une phrase, un nombre ou une autre séquence d’unités est dite palindrome, si elle se lit de la même manière dans les deux sens
Exemple: "non", "touot" et "1234321" sont toutes des chaînes de caractères palindromes mais "pierre" et "palindrome" n'en sont pas*/

export default () => {
  const isPalindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
        return false;
      }
    }
    return true;
  };

  const str = prompt("Enter a value: ");
  console.log(
    isPalindrome(str)
      ? "The string is a palindrome"
      : "The string is not a palindrome"
  );
};
