var superHerosQuestion1 = {
    question: "Quel est le premier acteur à avoir jouer Spider-Man ?",
    firstReponse: "Tom Holland",
    secondReponse: "Andrew Garfield",
    thirdReponse: "Tobby Maguire",
    fourthReponse: "Peter Parker",
};
var superHerosQuestion2 = {
    question: "Combien de temps Captain America est resté dans la glace ?",
    firstReponse: "74 ans",
    secondReponse: "13 ans",
    thirdReponse: "148 ans",
    fourthReponse: "62 ans",
};
var superHerosQuestion3 = {
    question: "Quel est le point faible de Superman ?",
    firstReponse: "Le curcuma",
    secondReponse: "La Kryptonite",
    thirdReponse: "Les femmes",
    fourthReponse: "Le soleil",
};
var superHerosQuestion4 = {
    question: "Quelle arme utilise Catwoman ?",
    firstReponse: "Un bazooka",
    secondReponse: "Une armée de chats",
    thirdReponse: "Un fouet",
    fourthReponse: "Des couteaux",
};
// Récupération des éléments du DOM
var questionSuperHeros = container.querySelector('p');
var buttons = Array.from(container.querySelectorAll('button'));
// Affichage de la question
questionSuperHeros.textContent = superHerosQuestion1.question;
// Affichage des réponses dans les boutons
buttons.forEach(function (button, i) {
    switch (i) {
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
