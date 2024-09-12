const readline = require("readline");

const devinettes = [
  {
    question: "Quel est la capitale de la France ? ",
    reponse: "Paris",
  },
  {
    question: "Quel est le plus grand océan de la planète ? ",
    reponse: "Pacifique",
  },
  {
    question: "Combien de continents y a-t-il sur Terre ? ",
    reponse: "6",
  },
];
let score = 0;
const badResponse = "Mauvaise réponse ! Dommage ! La réponse était:";
const goodResponse = "Bonne réponse !";

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const newQuestion = (question) => {
  return new Promise((resolve) => {
    interface.question(question, (res) => {
      resolve(res);
    });
  });
};

const game = async () => {
  for (let i = 0; i < devinettes.length; i++) {
    const res = await newQuestion(devinettes[i].question);
    if (res === devinettes[i].reponse) {
      console.log(goodResponse);
      score++;
    } else console.log(`${badResponse} ${devinettes[i].reponse}`);
  }
  console.log(
    `Félicitations ! Vous avez répondu à toutes les questions\nVotre score : ${score}/${devinettes.length}`
  );
  interface.close();
};

game();
