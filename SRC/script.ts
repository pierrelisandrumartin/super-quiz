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

const messageEnd = document.querySelector('.message-end') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;
const after = document.querySelector('.btn') as HTMLElement;

function questionDisplay() {
    const newP = document.createElement('p');
    if (newP) {
        newP.textContent = arraySuperHeros[numberQuestion]?.question as string;
        container?.appendChild(newP);
    }
}

function answersDisplay() {
    
    let currentAnswers = arraySuperHeros[numberQuestion]?.answer;

    if (!currentAnswers) {
        console.warn('Aucune réponse disponible pour la question', numberQuestion);
        return;
    }

    for (let i = 0; i < currentAnswers.length; i++) {
        const newButton = document.createElement('button');
        newButton.textContent = arraySuperHeros[numberQuestion]?.answer[i] as string;
        container?.appendChild(newButton);
    }
}

questionDisplay();
answersDisplay();


after?.addEventListener("click", function (e) {
    if (container && numberQuestion + 1 < arraySuperHeros.length) {
        container.innerHTML = "";
        numberQuestion++;
        questionDisplay();
        answersDisplay();
    } else {
        if (container && messageEnd) {
            container.innerHTML = "";
            messageEnd.style.display = 'inherit';
        }
    }
});


