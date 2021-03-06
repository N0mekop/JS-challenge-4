'use strict';

const teamDauphins = "Dauphins";
const teamKoalas = "Koalas";

let firstMatchDauphinsScores = {
    score1 : 96,
    score2 : 108,
    score3 : 89,
}

let firstMatchKoalasScores = {
    score1 : 88,
    score2 : 91,
    score3 : 110,
}

let secondMatchDauphinsScores = {
    score1 : 97,
    score2 : 112,
    score3 : 101,
}

let secondMatchKoalasScores = {
    score1 : 109,
    score2 : 95,
    score3 : 123,
}

let thirdMatchDauphinsScores = {
    score1 : 97,
    score2 : 112,
    score3 : 101,
}

let thirdMatchKoalasScores = {
    score1 : 109,
    score2 : 95,
    score3 : 106,
}

/* console.log(
    `\n`,
    `Dauphins score 1: ${firstMatchDauphinsScores.score1}\n`,
    `Dauphins score 2: ${firstMatchDauphinsScores.score2}\n`,
    `Dauphins score 3: ${firstMatchDauphinsScores.score3}\n`,
    `Koalas score 1: ${firstMatchKoalasScores.score1}\n`,
    `Koalas score 2: ${firstMatchKoalasScores.score2}\n`,
    `Koalas score 3: ${firstMatchKoalasScores.score3}\n`,
    );

console.log(
    `\n`,
    `Dauphins score 1: ${secondMatchDauphinsScores.score1}\n`,
    `Dauphins score 2: ${secondMatchDauphinsScores.score2}\n`,
    `Dauphins score 3: ${secondMatchDauphinsScores.score3}\n`,
    `Koalas score 1: ${secondMatchKoalasScores.score1}\n`,
    `Koalas score 2: ${secondMatchKoalasScores.score2}\n`,
    `Koalas score 3: ${secondMatchKoalasScores.score3}\n`,
    );

console.log(
    `\n`,
    `Dauphins score 1: ${thirdMatchDauphinsScores.score1}\n`,
    `Dauphins score 2: ${thirdMatchDauphinsScores.score2}\n`,
    `Dauphins score 3: ${thirdMatchDauphinsScores.score3}\n`,
    `Koalas score 1: ${thirdMatchKoalasScores.score1}\n`,
    `Koalas score 2: ${thirdMatchKoalasScores.score2}\n`,
    `Koalas score 3: ${thirdMatchKoalasScores.score3}\n`,
    ); */

function calculAverageScore(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
} 

/* TEAM DAUPHINS */

const firstMatchDauphinsAverageScores = calculAverageScore(
    firstMatchDauphinsScores.score1,
    firstMatchDauphinsScores.score2,
    firstMatchDauphinsScores.score3,
);

console.log(`La moyenne du premier match pour les ${teamDauphins} est de: ${firstMatchDauphinsAverageScores}`);

const secondMatchDauphinsAverageScores = calculAverageScore(
    secondMatchDauphinsScores.score1,
    secondMatchDauphinsScores.score2,
    secondMatchDauphinsScores.score3,
);

/* console.log(`La moyenne du second match pour les ${teamDauphins} est de: ${secondMatchDauphinsAverageScores}`); */

const thirdMatchDauphinsAverageScores = calculAverageScore(
    thirdMatchDauphinsScores.score1,
    thirdMatchDauphinsScores.score2,
    thirdMatchDauphinsScores.score3,
);

/* console.log(`La moyenne du troisi??me match pour les ${teamDauphins} est de: ${thirdMatchDauphinsAverageScores}`); */

/* TEAM KOALAS */

const firstMatchKoalasAverageScores = calculAverageScore(
    firstMatchKoalasScores.score1,
    firstMatchKoalasScores.score2,
    firstMatchKoalasScores.score3,
);

console.log(`La moyenne du premier match pour les ${teamKoalas} est de: ${firstMatchKoalasAverageScores}`);

const secondMatchKoalasAverageScores = calculAverageScore(
    secondMatchKoalasScores.score1,
    secondMatchKoalasScores.score2,
    secondMatchKoalasScores.score3,
);

/* console.log(`La moyenne du second match pour les ${teamKoalas} est de: ${secondMatchKoalasAverageScores}`); */

const thirdMatchKoalasAverageScores = calculAverageScore(
    thirdMatchKoalasScores.score1,
    thirdMatchKoalasScores.score2,
    thirdMatchKoalasScores.score3,
);

/* console.log(`La moyenne du troisi??me match pour les ${teamKoalas} est de: ${thirdMatchKoalasAverageScores}`); */

/* GAGNANT */

if(firstMatchDauphinsAverageScores > 100 || firstMatchKoalasAverageScores > 100) {
    if (firstMatchDauphinsAverageScores > firstMatchKoalasAverageScores) {
        console.log(`Les gagnants sont les: ${teamDauphins} !!!`);
    } else if (firstMatchDauphinsAverageScores < firstMatchKoalasAverageScores) {
        console.log(`Les gagnants sont les: ${teamKoalas} !!!`);
    } else {
        console.log(`Egalit??`)
    }
} else {
    console.log(`Aucune ??quipe n'a obtenue 100 pts`)
}
