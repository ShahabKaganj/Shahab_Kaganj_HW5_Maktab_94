
// HW5 - Q5 ---------------

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function () { alert("You agreed."); },
//     function () { alert("You canceled the execution."); }
// );

let ask = (question) => { (confirm(question)) ? alert("You agreed.") : alert("You canceled the execution.") };

ask("Do You Agree?")