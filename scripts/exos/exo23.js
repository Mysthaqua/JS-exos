/* Exercice 23 Structures de données
Objectifs: Comprendre la création et l’utilisation des Structures de données objets et tableaux.

Réalisez un programme qui, à partir du tableau ci-dessous, permet :
D'afficher la liste des étudiants (Prenom Nom).
Pour chaque étudiant, d'afficher la liste des matières et la note associée à chaque matière.
Pour chaque étudiant, de calculer et afficher la moyenne générale.
let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; */

export default () => {
  let etudiants = [
    {
      prenom: "José",
      nom: "Garcia",
      matieres: {
        francais: 16,
        anglais: 7,
        humour: 14,
      },
    },
    {
      prenom: "Antoine",
      nom: "De Caunes",
      matieres: {
        francais: 15,
        anglais: 6,
        humour: 16,
        informatique: 4,
        sport: 10,
      },
    },
  ];

  etudiants.forEach((etudiant) => {
    let avg = 0;
    let cpt = 0;

    console.log(`${etudiant.prenom} ${etudiant.nom}`);

    for (const matiere in etudiant.matieres) {
      let note = etudiant.matieres[matiere];
      avg += note;
      cpt++;
      console.log(`\t${matiere}: ${note}`);
    }
    avg /= cpt;

    console.log(`moyenne générale: ${avg.toFixed(1)}`);
  });
};
