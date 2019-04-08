 var shuffleSequence = seq("setcounter","intro", "demographic", "lextale_instructions", 
                          sepWith("sep", seq(anyOf('LexTale'))),"sr","end_of_experiment");

var manualSendResults = true;

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Please wait for the next sentence.",
        ignoreFailure: true
    },
    "DashedSentence", {
        hideProgressBar: true,
        mode: "self-paced reading"
    },

    "Question", {
        hideProgressBar: true,
        hasCorrect: true,
        presentHorizontally: true,
        randomOrder: false,
        as: [["z","Yes"], ["m","No"]]
    },
    "Message", {
        hideProgressBar: true,
        transfer: "keypress"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
    }
];

var items = [
["practice_sep", "Separator", {transfer: 1000}], 
["sr", "__SendResults__", {}], 
 
['spacebar','Separator', {transfer: 2000,  normalMessage: "Press spacebar on next screen to reveal words."}],
    
["sep", "Separator", { transfer: 1000 }],
["intro", "Form", { html: { include: "example_intro.html" }}],
["demographic", "Form", { html: { include: "demographic.html" }}],
["lextale_instructions", "Form", {html: {include: "lextale_instructions.html"}}],

["LexTale", "Question", {q: "platery", hasCorrect: 1}],
["LexTale", "Question", {q: "denial", hasCorrect: 0}],
["LexTale", "Question", {q: "generic", hasCorrect: 0}],
["LexTale", "Question", {q: "mensible", hasCorrect: 1}],
["LexTale", "Question", {q: "scornful", hasCorrect: 0}],
["LexTale", "Question", {q: "stoutly", hasCorrect: 0}],
["LexTale", "Question", {q: "ablaze", hasCorrect: 0}],
["LexTale", "Question", {q: "kermshaw", hasCorrect: 1}],
["LexTale", "Question", {q: "moonlit", hasCorrect: 0}],
["LexTale", "Question", {q: "lofty", hasCorrect: 0}],
["LexTale", "Question", {q: "hurricane", hasCorrect: 0}],
["LexTale", "Question", {q: "flaw", hasCorrect: 0}],
["LexTale", "Question", {q: "alberation", hasCorrect: 1}],
["LexTale", "Question", {q: "unkempt", hasCorrect: 0}],
["LexTale", "Question", {q: "breeding", hasCorrect: 0}],
["LexTale", "Question", {q: "festivity", hasCorrect: 0}],
["LexTale", "Question", {q: "screech", hasCorrect: 0}],
["LexTale", "Question", {q: "savoury", hasCorrect: 0}],
["LexTale", "Question", {q: "plaudate", hasCorrect: 1}],
["LexTale", "Question", {q: "shin", hasCorrect: 0}],
["LexTale", "Question", {q: "fluid", hasCorrect: 0}],
["LexTale", "Question", {q: "spaunch", hasCorrect: 1}],
["LexTale", "Question", {q: "allied", hasCorrect: 0}],
["LexTale", "Question", {q: "slain", hasCorrect: 0}],
["LexTale", "Question", {q: "recipient", hasCorrect: 0}],
["LexTale", "Question", {q: "exprate", hasCorrect: 1}],
["LexTale", "Question", {q: "eloquence", hasCorrect: 0}],
["LexTale", "Question", {q: "cleanliness", hasCorrect: 0}],
["LexTale", "Question", {q: "dispatch", hasCorrect: 0}],
["LexTale", "Question", {q: "rebondicate", hasCorrect: 1}],
["LexTale", "Question", {q: "ingenious", hasCorrect: 0}],
["LexTale", "Question", {q: "bewitch", hasCorrect: 0}],
["LexTale", "Question", {q: "skave", hasCorrect: 1}],
["LexTale", "Question", {q: "plaintively", hasCorrect: 0}],
["LexTale", "Question", {q: "kilp", hasCorrect: 1}],
["LexTale", "Question", {q: "interfate", hasCorrect: 1}],
["LexTale", "Question", {q: "hasty", hasCorrect: 0}],
["LexTale", "Question", {q: "lengthy", hasCorrect: 0}],
["LexTale", "Question", {q: "fray", hasCorrect: 0}],
["LexTale", "Question", {q: "crumper", hasCorrect: 1}],
["LexTale", "Question", {q: "upkeep", hasCorrect: 0}],
["LexTale", "Question", {q: "majestic", hasCorrect: 0}],
["LexTale", "Question", {q: "magrity", hasCorrect: 1}],
["LexTale", "Question", {q: "nourishment", hasCorrect: 0}],
["LexTale", "Question", {q: "abergy", hasCorrect: 1}],
["LexTale", "Question", {q: "proom", hasCorrect: 1}],
["LexTale", "Question", {q: "turmoil", hasCorrect: 0}],
["LexTale", "Question", {q: "carbohydrate", hasCorrect: 0}],
["LexTale", "Question", {q: "scholar", hasCorrect: 0}],
["LexTale", "Question", {q: "turtle", hasCorrect: 0}],
["LexTale", "Question", {q: "fellick", hasCorrect: 1}],
["LexTale", "Question", {q: "destription", hasCorrect: 1}],
["LexTale", "Question", {q: "cylinder", hasCorrect: 0}],
["LexTale", "Question", {q: "censorhip", hasCorrect: 0}],
["LexTale", "Question", {q: "celestial", hasCorrect: 0}],
["LexTale", "Question", {q: "rascal", hasCorrect: 0}],
["LexTale", "Question", {q: "purrage", hasCorrect: 1}],
["LexTale", "Question", {q: "pulsh", hasCorrect: 1}],
["LexTale", "Question", {q: "muddy", hasCorrect: 0}],
["LexTale", "Question", {q: "quirty", hasCorrect: 1}],
["LexTale", "Question", {q: "pudour", hasCorrect: 1}],
["LexTale", "Question", {q: "listless", hasCorrect: 0}],
["LexTale", "Question", {q: "wrought", hasCorrect: 0}],


["end_of_experiment", "Message", {html: {include: "end_of_exp.html"},transfer:600000}]



];
