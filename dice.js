//dice
const dice = {
    sides: 6,
    roll: function () {
        var diceNumber = Math.floor(Math.random() * 6 + 1);
        return diceNumber;
    },
};
