let scores = "10 5 20 20 4 5 2 25 1";

scores = scores.split(' ').map((e) => parseInt(e));

let best = scores[0],
    worst = scores[0],
    countBest = 0,
    countWorst = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > best) {
        best = scores[i];
        countBest++;
    } else if (scores[i] < worst) {
        worst = scores[i];
        countWorst++;
    }
}