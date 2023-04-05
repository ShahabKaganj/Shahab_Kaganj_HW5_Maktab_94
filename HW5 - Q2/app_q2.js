// HW5 - Q1 ---------------

// let count = 0;

// let user = {
//   increase: function () {
//     return count++;
//   },

//   decrease: function () {
//     return count--;
//   },

//   reset: function () {
//     count = 0;
//   },

//   read: function () {
//     console.log(`${count}`);
//   },
// };

// user.increase();
// user.decrease();
// user.decrease();
// user.decrease();
// user.reset();
// user.read();

//--------------------------------------------

// let user = {
//     increase: () => count++,
//     decrease: () => count--,
//     reset: () => (count = 0),
//     read: () => console.log(`${count}`),
// };

// user.increase();
// user.decrease();
// user.decrease();
// user.decrease();
// user.reset();
// user.read();

// Way 3 --------------------------------------

const pedometer = {

    count : 0,

    increase: function () {
        this.count++;
        return this
    },

    decrease: function () {
        this.count--;
        return this
    },

    reset: function () {
        this.count = 0;
        return this
    },

    read: function () {
        console.log(this.count)
        return this
    },
}

pedometer.increase().read().reset().read();


// The pedometer app ---------------------------

let counterElem = document.getElementById("counterValue");

function increase() {
    let preValue = counterElem.textContent;
    let newValue = parseInt(preValue) + 1;

    if (newValue > 0) {
        counterElem.style.color = "#012468";
    } else if (newValue < 0) {
        counterElem.style.color = "#be0000";
    } else {
        counterElem.style.color = "#272727";
    }
    counterElem.textContent = newValue;
}

function decrease() {
    let preValue = counterElem.textContent;
    let newValue = parseInt(preValue) - 1;

    if (newValue > 0) {
        counterElem.style.color = "#012468";
    } else if (newValue < 0) {
        counterElem.style.color = "#be0000";
    } else {
        counterElem.style.color = "#272727";
    }
    counterElem.textContent = newValue;
}

function reset() {
    let counterValue = 0;
    counterElem.textContent = counterValue;
    counterElem.style.color = "white";
}
