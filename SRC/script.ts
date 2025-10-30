interface Question {
    question: string;
    answer: string[];
}

let arraySuperHeros: Question[] = [
    {
        question: "Quel est le premier acteur à avoir jouer Spider-Man ?",
        answer: ["Tom Holland", "Andrew Garfield", "Tobby Maguire", "Peter Parker"]
    },

    {
        question: "Combien de temps Captain America est resté dans la glace ?",
        answer: ["74 ans", "13 ans", "148 ans", "62 ans"]
    },

    {
        question: "Quel est le point faible de Superman ?",
        answer: ["Le curcuma", "La Kryptonite", "Les femmes", "Le soleil"]
    },

    {
        question: "Quelle arme utilise Catwoman ?",
        answer: ["Un bazooka", "Une armée de chats", "Un fouet", "Des couteaux"] 
    }
]

let numberQuestion = 0;

const container = document.querySelector(".container") as HTMLElement;
const buttonNext = document.querySelector(".btn button") as HTMLButtonElement | null;
const messageEnd = document.querySelector(".message-end") as HTMLElement;

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
        numberQuestion++;
        questionDisplay();
        answersDisplay();

        if (buttonNext) {
            buttonNext.disabled = true;
        };

    } else {
        if (container && messageEnd) {
            container.innerHTML = "";
            messageEnd.style.display = "inherit"
        };
    };
});




