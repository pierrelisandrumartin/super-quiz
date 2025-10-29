

// // Affichage des réponses dans les boutons

//     buttons.forEach((button, i) => {
//         switch(i) {
//             case 0:
//                 button.textContent = superHerosQuestion1.firstReponse;
//                 break;
//             case 1:
//                 button.textContent = superHerosQuestion1.secondReponse;
//                 break;
//             case 2:
//                 button.textContent = superHerosQuestion1.thirdReponse;
//                 break;
//             case 3:
//                 button.textContent = superHerosQuestion1.fourthReponse;
//                 break;
//         }
//     });
// };


// ETAPE 1
// const container = document.querySelector('.container-question2')!;
// const ul = document.createElement('ul');

// let tableau = ["Hello", "Yo", "Ciao"];

// for (let i = 0; i < tableau.length; i++) {
//     let newLi: HTMLElement = document.createElement("li")!;
//     if (newLi) {
//         newLi.textContent = tableau[i] as string;
//         ul.appendChild(newLi);
//     }

// }

// container.appendChild(ul);

//Etape 2

interface Question {
    question: string;
    reponse: string[];
}

let arraySuperHeros: Question[] = [
    {
        question: "Quel est le premier acteur à avoir jouer Spider-Man ?",
        reponse: ["Tom Holland", "Andrew Garfield", "Tobby Maguire", "Peter Parker"]
    },

    {
        question: "Combien de temps Captain America est resté dans la glace ?",
        reponse: ["74 ans", "13 ans", "148 ans", "62 ans"]
    },

    {
        question: "Quel est le point faible de Superman ?",
        reponse: ["Le curcuma", "La Kryptonite", "Les femmes", "Le soleil"]
    },

    {
        question: "Quelle arme utilise Catwoman ?",
        reponse: ["Un bazooka", "Une armée de chats", "Un fouet", "Des couteaux"] 
    }
]

let numberQuestion = 0;

const container = document.querySelector('.container');

function questionDislay() {
    const newP = document.createElement('p');
    if (newP) {
        newP.textContent = arraySuperHeros[numberQuestion]?.question as string;
        container?.appendChild(newP);
    }
}

function reponseDisplay () {
    const newButton = document.createElement('button');
    if (newButton) {
        // console.log(arraySuperHeros[numberQuestion]?.reponse[0])
        newButton.textContent = arraySuperHeros[numberQuestion]?.reponse[0] as string;
        container?.appendChild(newButton);
    }
}

questionDislay();
reponseDisplay();
    


// }
    // if (newButton) {
    //     newButton.textContent = questionSuperHeros.superHerosQuestion1.firstReponse
    //     newButton.textContent = questionSuperHeros.superHerosQuestion1.secondReponse
    // }

    


//Etape 3