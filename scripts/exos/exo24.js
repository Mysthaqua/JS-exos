/* Exercice 24 – Meilleure Note
Objectifs:

Réalisez un programme qui permet de connaitre, pour n notes saisies :
La meilleur note
La moins bonne note
La moyenne des notes
On affichera le resultat sur une page HTML. */

export default () => {
  const staticInput = () => {
    const nb = prompt("How many grades ?");

    const grades = [];
    for (let i = 0; i < nb; i++) {
      let grade = parseInt(
        prompt("Please enter a grade between 0 and 20 included: ")
      );
      while (grade < 0 || grade > 20) {
        grade = parseInt(prompt("ERROR, please try again: "));
      }
      grades.push(grade);
    }

    const p1 = document.createElement("p");
    p1.innerHTML = `La série contient ${grades.length} notes:`;
    const ul1 = document.createElement("ul");
    const br = document.createElement("div");
    br.classList.add("br");
    const p2 = document.createElement("p");
    p2.innerHTML = `Sur l'ensemble des ${grades.length} notes:`;
    const ul2 = document.createElement("ul");

    for (let i = 0; i < grades.length; i++) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerHTML = `En note ${i}, vous avez saisi ${grades[i]}/20.`;
      li.appendChild(span);
      ul1.appendChild(li);
    }

    const li1 = document.createElement("li");
    const span1 = document.createElement("span");
    span1.innerHTML = `La meilleure note est ${Math.max(...grades)}/20.`;
    span1.style.color = "green";
    li1.appendChild(span1);
    ul2.appendChild(li1);

    const li2 = document.createElement("li");
    const span2 = document.createElement("span");
    span2.innerHTML = `La moins bonne note est ${Math.min(...grades)}/20.`;
    span2.style.color = "red";
    li2.appendChild(span2);
    ul2.appendChild(li2);

    const li3 = document.createElement("li");
    const span3 = document.createElement("span");
    span3.innerHTML = `La moyenne des notes est ${
      grades.reduce((a, b) => a + b, 0) / grades.length
    }/20.`;
    span3.style.color = "grey";
    li3.appendChild(span3);
    ul2.appendChild(li3);

    document.body.appendChild(p1);
    document.body.appendChild(ul1);
    document.body.appendChild(br);
    document.body.appendChild(p2);
    document.body.appendChild(ul2);
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

  const h1 = document.createElement("h1");
  h1.innerHTML = "Notes";
  const br1 = document.createElement("div");
  br1.classList.add("br");
  const h2 = document.createElement("h2");
  h2.innerHTML = "Meilleure note, moins bonne note, moyenne des notes";
  const br2 = document.createElement("div");
  br2.classList.add("br");

  document.body.appendChild(h1);
  document.body.appendChild(br1);
  document.body.appendChild(h2);
  document.body.appendChild(br2);

  let input;
  do {
    input = prompt(
      "Choose an input mode:\n1: Static input\n2: Input until negative grade"
    );
  } while (input !== "1" && input !== "2");

  switch (input) {
    case "1":
      staticInput();
      break;
    case "2":
      inputUntilNegativeGrade();
      break;
  }
};
