interface Question {
    question: string;
    answer: string[];
    correctAnswer: string;
}

let arraySuperHeros: Question[] = [
    {
        question: "Quel est le premier acteur à avoir jouer Spider-Man ?",
        answer: ["Tom Holland", "Andrew Garfield", "Tobby Maguire", "Peter Parker"],
        correctAnswer: "Tobby Maguire"
    },

    {
        question: "Combien de temps Captain America est resté dans la glace ?",
        answer: ["74 ans", "13 ans", "148 ans", "62 ans"],
        correctAnswer: "62 ans"
    },

    {
        question: "Quel est le point faible de Superman ?",
        answer: ["Le curcuma", "La Kryptonite", "Les femmes", "Le soleil"],
        correctAnswer: "La Kryptonite"
    },

    {
        question: "Quelle arme utilise Catwoman ?",
        answer: ["Un bazooka", "Une armée de chats", "Un fouet", "Des couteaux"],
        correctAnswer: "Un fouet"
    }
]

let arrayJeuxVideos: Question[] = [
    {
        question: "Quel est le tout premier RPG (Role Play-Game) ?",
        answer: ["Final Fantasy", "Donjons & Dragons", "Utopia", "Hydlide"],
        correctAnswer: "Donjons & Dragons"
    },

    {
        question: "Qui a créer le jeu indépendant Agni ?",
        answer: ["Headup Games", "Venidad", "Les Canards Boiteux", "Semiworks"],
        correctAnswer: "Les Canards Boiteux"
    },

    {
        question: "Quel est le jeu le plus vendu de tous les temps ?",
        answer: ["Minecraft", "Tetris", "Wii Sports", "Grand Theft Auto V"],
        correctAnswer: "Minecraft"
    },

    {
        question: "Quel est le nom du mode battle royale de Call of Duty ?",
        answer: ["Apex", "Warzone", "Blackout", "Frontlines"],
        correctAnswer: "Warzone"
    }
]

const container = document.querySelector(".container") as HTMLElement;
const buttonNext = document.querySelector(".btn #after") as HTMLButtonElement | null;
const buttonRestart = document.querySelector(".btn #restart button") as HTMLButtonElement | null;
const buttonMenu = document.querySelector(".btn #menu") as HTMLButtonElement | null;
const messageGoodAnswer = document.querySelector("#message-good-answer") as HTMLElement;
const messageWrongAnswer = document.querySelector("#message-wrong-answer") as HTMLElement;
const messageEnd = document.querySelector(".message-end") as HTMLElement | null;

let numberQuestion = 0;
let score = 0;

function getScoreMessage(score:number, total: number): string{
    const percentage = (score / total) * 100;
    if (percentage === 100) {
        return ` Fin du quiz ! \n \n ${score}/${total} \n Parfait ! \n Tu es un vrai fan de Super Héros !  <img src="./ASSETS/perfect.png" class="score-icon" id="perfect-icon">`;

    } else if (percentage >= 75) {
        return `Fin du quiz ! \n \n ${score}/${total} \n Très bien ! \n Tu t'y connais en Super-Héros ! <img src="./ASSETS/good.png" class="score-icon" id="good-icon">`;
    } else if (percentage >= 50) {
        return `Fin du quiz ! \n \n ${score}/${total} \n Pas mal ! \n Encore quelques films à regarder ! <img src="./ASSETS/notbad.png" class="score-icon" id="notbad-icon">`;
    } else if (percentage >= 25) {
        return `Fin du quiz ! \n \n ${score}/${total} \n Mauvais ! \n Il faut réviser tes classiques ! <img src="./ASSETS/bad.png" class="score-icon" id="bad-icon">`;
    } else {
        return `Fin du quiz ! \n \n ${score}/${total} \n Nul ! \n As-tu déjà vu un film de Super-Héros ? <img src="./ASSETS/verybad.png" class="score-icon" id="verybad-icon">`;
    }
}

if (buttonNext) {
    buttonNext.disabled = true;
};

function questionDisplay() {
    const newP = document.createElement("p"); 
    newP.textContent = arraySuperHeros[numberQuestion]?.question as string;
    container.appendChild(newP)  
}
questionDisplay();

function answersDisplay() {
    let answer = arraySuperHeros[numberQuestion]?.answer;
    
    if (!answer) {
    console.warn("aucune reponse disponible pour la question", numberQuestion);
    return;
    }

    for (let i = 0; i < answer.length; i++) {
        const newInput = document.createElement("input");
        newInput.type = "button";
        newInput.className = "answer";
        newInput.name = "answer";
        newInput.value = arraySuperHeros[numberQuestion]?.answer[i] as string;
        container.appendChild(newInput)
    };

    const buttonAnswer = document.querySelectorAll(".answer") as NodeListOf<HTMLInputElement>;
    
    buttonAnswer.forEach(button => {
        button.addEventListener("click", function (e) {

            buttonAnswer.forEach(otherButton => {
                otherButton.disabled = true; 
            });

            button.disabled = false;
            button.style.border = "4px solid #800404";

            if (messageGoodAnswer && messageWrongAnswer && button.value === arraySuperHeros[numberQuestion]?.correctAnswer) {
                
                button.style.border = "4px solid green";
                messageGoodAnswer.style.display = "inherit";
                score++;

            } else {

                button.style.border = "4px solid red";
                messageWrongAnswer.style.display = "inherit";

                buttonAnswer.forEach(btn => {
                    if (btn.value === arraySuperHeros[numberQuestion]?.correctAnswer) {
                        btn.style.border = "4px solid green";
                    }
                });

            };

            if (buttonNext) {
                buttonNext.disabled = false;
            };
        });
    });
};

answersDisplay();



buttonNext?.addEventListener("click", function (e) {

    if (container && numberQuestion + 1 < arraySuperHeros.length) {
        container.innerHTML = "";
        messageGoodAnswer.style.display = "none";
        messageWrongAnswer.style.display = "none";
        numberQuestion++;
        questionDisplay();
        answersDisplay();

        if (buttonNext) {
            buttonNext.disabled = true;
        };

    } else {
        if (container && messageEnd && buttonRestart && buttonMenu) {
            container.innerHTML = "";
            buttonNext.style.display = "none";
            buttonMenu.style.display = "inherit"
            buttonRestart.style.display = "inherit";
            messageGoodAnswer.style.display = "none";
            messageWrongAnswer.style.display = "none";
            messageEnd.style.display = "inherit"
            messageEnd.innerHTML = getScoreMessage(score, arraySuperHeros.length);
        };
    };
});




