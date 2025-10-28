let superHerosQuestion1: {
    question: string, firstReponse: string, secondReponse: string, thirdReponse: string, fourthReponse: string
} = {
    question: "Quel est le premier acteur à avoir jouer Spider-Man ?",
    firstReponse: "Tom Holland",
    secondReponse: "Andrew Garfield",
    thirdReponse: "Tobby Maguire",
    fourthReponse: "Peter Parker",
};

let superHerosQuestion2: {
    question: string, firstReponse: string, secondReponse: string, thirdReponse: string, fourthReponse: string
} = {
    question: "Combien de temps Captain America est resté dans la glace ?",
    firstReponse: "74 ans",
    secondReponse: "13 ans",
    thirdReponse: "148 ans",
    fourthReponse: "62 ans",
};

let superHerosQuestion3: {
    question: string, firstReponse: string, secondReponse: string, thirdReponse: string, fourthReponse: string
} = {
    question: "Quel est le point faible de Superman ?",
    firstReponse: "Le curcuma",
    secondReponse: "La Kryptonite",
    thirdReponse: "Les femmes",
    fourthReponse: "Le soleil",
};

let superHerosQuestion4: {
    question: string, firstReponse: string, secondReponse: string, thirdReponse: string, fourthReponse: string
} = {
    question: "Quelle arme utilise Catwoman ?",
    firstReponse: "Un bazooka",
    secondReponse: "Une armée de chats",
    thirdReponse: "Un fouet",
    fourthReponse: "Des couteaux",
};

// Récupération des éléments du DOM
const firstContainer = document.querySelector('.container-question1');
if (firstContainer) {
    const questionSuperHeros = firstContainer.querySelector('p')!;
    const buttons = Array.from(firstContainer.querySelectorAll('button'));

// Affichage de la question
    questionSuperHeros.textContent = superHerosQuestion1.question;

// Affichage des réponses dans les boutons

    buttons.forEach((button, i) => {
        switch(i) {
            case 0:
                button.textContent = superHerosQuestion1.firstReponse;
                break;
            case 1:
                button.textContent = superHerosQuestion1.secondReponse;
                break;
            case 2:
                button.textContent = superHerosQuestion1.thirdReponse;
                break;
            case 3:
                button.textContent = superHerosQuestion1.fourthReponse;
                break;
        }
    });
};


const secondContainer = document.querySelector('.container-question2');
if (secondContainer) {
    const questionSuperHeros = secondContainer.querySelector('p')!;
    const buttons = Array.from(secondContainer.querySelectorAll('button'))
    
    questionSuperHeros.textContent = superHerosQuestion2.question;

    buttons.forEach((button, i) => {
        switch (i) {
            case 0: button.textContent = superHerosQuestion2.firstReponse;
                break;
            
            case 1: button.textContent = superHerosQuestion2.secondReponse;
                break;
            
            case 2: button.textContent = superHerosQuestion2.thirdReponse;
                break;
            
            case 3: button.textContent = superHerosQuestion2.fourthReponse;
                break;
            
            
        }
    })

};



