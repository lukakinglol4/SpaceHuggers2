/* Optional Frontiers cheat codes. Type MONEY while the game is open. */
'use strict';

const moneyCheat = 'money';
let moneyCheatBuffer = '';

window.addEventListener('keydown', event => {
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    moneyCheatBuffer = (moneyCheatBuffer + event.key.toLowerCase()).slice(-moneyCheat.length);
    if (moneyCheatBuffer !== moneyCheat) return;

    frontierData.credits = Infinity;
    saveFrontiers();
    refreshShop();
    moneyCheatBuffer = '';
});
