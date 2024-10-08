/* Exercice 08
Rédiger un programme utilisant 2 boucle imbriquées pour faire cet affichage :

Table des matières :
    Chapitre 1:
        -partie 1.1
        -partie 1.2
        -partie 1.3
    Chapitre 2:
        -partie 2.1
        -partie 2.2
        -partie 2.3
    Chapitre 3:
        -partie 3.1
        -partie 3.2
        -partie 3.3*/

export default () => {
  console.log("Table of contents:");
  for (let i = 1; i <= 3; i++) {
    console.log(`\tChapter ${i}:`);
    for (let j = 1; j <= 3; j++) {
      console.log(`\t\t-part ${i}.${j}`);
    }
  }
};
