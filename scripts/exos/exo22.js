/* Exercice 22
Via l'utilisation d'une variable de type tableau, vous devrez réaliser un logiciel permettant à l'utilisateur d'entrer une série de notes, dont le nombre possible à entrer sera soit (au choix de l'utilisateur) :
saisie avant la saisie de notes
permissif et pourra aller jusqu'à entrer une note négative qui stoppera la saisie des notes.
Une fois la saisie des notes terminée, l'utilisateur aura à sa disposition un affichage lui permettant d'avoir la note max, la note min ainsi que la moyenne (possible de faire un menu pour choisir)
Pour les menus à choix, l'utilisation d'un switch est conseillée
Exemples :

Choisir un mode de saisie:
1 : Saisie fixe
2 : Saisie jusqu'à note négative 

Votre choix : 1

Combien de notes ? 5

Début de Saisie !
Veuillez entrer une note entre 0 et 20 compris : 12
Veuillez entrer une note entre 0 et 20 compris : 0
Veuillez entrer une note entre 0 et 20 compris : 20
Veuillez entrer une note entre 0 et 20 compris : 300
ERREUR, veuillez réessayer : 10
Veuillez entrer une note entre 0 et 20 compris : 13
Fin de Saisie !

La note maximale est de 20.00 / 20
La note minimale est de 0.00 / 20
La moyenne est de 11.0 / 20
Choisir un mode de saisie:
1 : Saisie fixe
2 : Saisie jusqu'à note négative 

Votre choix : 2

Veuillez entrer une note entre 0 et 20 compris : 12
Veuillez entrer une note entre 0 et 20 compris : 0
Veuillez entrer une note entre 0 et 20 compris : 20
Veuillez entrer une note entre 0 et 20 compris : 300
ERREUR, veuillez réessayer : 10
Veuillez entrer une note entre 0 et 20 compris : 13
Veuillez entrer une note entre 0 et 20 compris : -1
Fin de Saisie !

La note maximale est de 20.00 / 20
La note minimale est de 0.00 / 20
La moyenne est de 11.0 / 20*/

export default () => {
  const staticInput = () => {
    let message = "How many grades ?";
    const nb = prompt(message);
    console.log(`${message} ${nb}`);

    console.log("Beggining the input");
    const grades = [];
    for (let i = 0; i < nb; i++) {
      message = "Please enter a grade between 0 and 20 included: ";
      let grade = parseInt(prompt(message));
      console.log(`${message} ${grade}`);
      while (grade < 0 || grade > 20) {
        let message = "ERROR, please try again: ";
        grade = parseInt(prompt(message));
        console.log(`${message} ${grade}`);
      }
      grades.push(grade);
    }
    console.log("Ending the input");

    console.log(`The max grade is ${Math.max(...grades)} / 20`);
    console.log(`The min grade is ${Math.min(...grades)} / 20`);
    console.log(
      `The average grade is ${
        grades.reduce((a, b) => a + b, 0) / grades.length
      } / 20`
    );
  };
  const inputUntilNegativeGrade = () => {
    console.log("Beggining the input");
    const grades = [];
    let grade;
    do {
      message = "Please enter a grade between 0 and 20 included: ";
      grade = parseInt(prompt(message));
      console.log(`${message} ${grade}`);
      while (grade > 20) {
        let message = "ERROR, please try again: ";
        grade = parseInt(prompt(message));
        console.log(`${message} ${grade}`);
      }
      if (grade >= 0) grades.push(grade);
    } while (grade >= 0);
    console.log("Ending the input");

    console.log(`The max grade is ${Math.max(...grades)} / 20`);
    console.log(`The min grade is ${Math.min(...grades)} / 20`);
    console.log(
      `The average grade is ${
        grades.reduce((a, b) => a + b, 0) / grades.length
      } / 20`
    );
  };

  // -----
  let message =
    "Choose an input mode:\n1: Static input\n2: Input until negative grade";
  console.log(message);

  let input;
  do {
    input = prompt(message);
  } while (input !== "1" && input !== "2");
  console.log(`Your choice: ${input}`);

  switch (input) {
    case "1":
      staticInput();
      break;
    case "2":
      inputUntilNegativeGrade();
      break;
  }
};
