
// HW5 - Q3 -----------------

const users = [];
let Cntnu = true;

while (Cntnu) {
    Cntnu = getData();
}

function getData() {
    const data = prompt("Enter the info according to the opposite template : Name , Age");
    if (data == null || data == "") {
        return false;
    }
    users.push(seprateData(data));
    return true;
}