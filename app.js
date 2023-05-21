function generateExcuse() {
    let culprit = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed on', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let randomCulprit = culprit[Math.floor(Math.random() * culprit.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;
    document.getElementById('excuse').innerHTML = excuse;
}