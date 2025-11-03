type Theme = "superHeros" | "jeuxVideos";

interface Question {
    question: string;
    answer: string[];
    correctAnswer: string;
}

// TABLEAU QUESTION/REPONSES
const QUESTIONS_BY_THEME: Record<Theme, Question[]> = {
    superHeros: [
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
    ],

    jeuxVideos: [
        {
            question: "Quel est le tout premier RPG (Role Play-Game) ?",
            answer: ["Final Fantasy", "Donjons & Dragons", "Utopia", "Hydlide"],
            correctAnswer: "Donjons & Dragons"
        },

        {
            question: "Qui a créer le jeu indépendant AGNI ?",
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
};

// SELECTION THEME
function getSelectedTheme(): Theme { 
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("theme");

    const map: Record<string, Theme> = {
        superHeros: "superHeros",
        jeuxVideos: "jeuxVideos"
    };

    return map[raw ?? ""] ?? "superHeros";
}

const theme = getSelectedTheme();
const questions = QUESTIONS_BY_THEME[theme];
let numberQuestion = 0;
let score = 0;

// DOM
const container = document.querySelector(".container") as HTMLElement;
let buttonNext = document.querySelector(".btn #after") as HTMLButtonElement | null;
const buttonRestart = document.querySelector(".btn #restart button") as HTMLButtonElement | null;
const buttonMenu = document.querySelector(".btn #menu") as HTMLButtonElement | null;
const messageGoodAnswer = document.querySelector("#message-good-answer") as HTMLElement;
const messageWrongAnswer = document.querySelector("#message-wrong-answer") as HTMLElement;
const messageEnd = document.querySelector(".message-end") as HTMLElement | null;

// SCORE MESSAGE
function getScoreMessage(score:number, total: number): string {
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

// ACTIVATION/DESACTIVATION BOUTON SUIVANT
if (buttonNext) {
    buttonNext.disabled = true;
};

// AFFICHAGE QUESTIONS
function questionDisplay(): void {
    const newP = document.createElement("p");
    newP.textContent = questions[numberQuestion]?.question as string;
    container.appendChild(newP)
};

// AFFICHAGE REPONSES
function answersDisplay(): void {
    let answer = questions[numberQuestion]?.answer;

    if (!answer) {
        console.warn("aucune reponse disponible pour la question", numberQuestion);
        return;
    }
    
    answer.forEach((answer) => {
        const newInput = document.createElement("input");
        newInput.type = "button";
        newInput.className = "answer";
        newInput.name = "answer";
        newInput.value = answer;
        newInput.addEventListener("click", () => answersClick(newInput));
        container.appendChild(newInput);
    });
};

// DESACTIVATION BOUTONS CLIC REPONSE
function answersClick(newInput: HTMLInputElement): void {
    const buttonAnswer = document.querySelectorAll(".answer") as NodeListOf<HTMLInputElement>;
    
    buttonAnswer.forEach(button => {
        button.addEventListener("click", function (e) {

            buttonAnswer.forEach(otherButton => {
                otherButton.disabled = true;
            });

            button.disabled = false;
            button.style.border = "4px solid #800404";
            if (buttonNext) {
                buttonNext.disabled = false;
            }

            if (messageGoodAnswer && messageWrongAnswer && button.value === questions[numberQuestion]?.correctAnswer) {
                
                button.style.border = "4px solid green";
                messageGoodAnswer.style.display = "inherit";
                score++;

            } else {

                button.style.border = "4px solid red";
                messageWrongAnswer.style.display = "inherit";

                buttonAnswer.forEach(btn => {
                    if (btn.value === questions[numberQuestion]?.correctAnswer) {
                        btn.style.border = "4px solid green";
                    }
                });
            }
        });
    });
};


buttonNext?.addEventListener("click", () => {

    if (container && numberQuestion + 1 < questions.length) {
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
            messageEnd.innerHTML = getScoreMessage(score, questions.length);
        };
    };
});

questionDisplay();
answersDisplay();
