function saturdayFun(activity = "roller-skate") {
    switch("activity") {
        case console.log(`This Saturday, I want to ${activity}!`):
            break;
        default:
            return `This Saturday, I want to ${activity}!`;
    }
};

const mondayWork = function (activity = "go to the office") {
    switch("activity") {
        case console.log(`This Monday, I will ${activity}.`):
            break;
            default: return `This Monday, I will ${activity}.`;
    }
}

const wrapAdjective = function(parameter) {
    return function(word = "special") {
        return `You are ${parameter}${word}${parameter}!`;
    }
}
