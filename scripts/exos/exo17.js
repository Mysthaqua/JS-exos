/* Exercice 17
Remplacer les expressions de fonctions par des fonctions fléchées (lambda)

function ask(question, yes, no) {
    if (confirm(question)) // affiche une boite de dialogue avec la possibilité d'accepter ou refuser
        yes();
    else 
        no();
}
ask(
    "Do you agree?",
    function () {
        alert("You agreed.");
    },
    function () {
        alert("You canceled the execution.");
    }
);*/

export default () => {
  const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };

  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
};
