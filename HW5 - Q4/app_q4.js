
const note = document.querySelector(".note");
const msg = document.getElementById("msg");

function getInfo() {
    const msgUser = prompt("please enter a message");
    const top = Number(prompt("please enter top position"));
    const right = Number(prompt("please enter right position"));
    const className = prompt("please enter a class name");

    const setInfo = {
        message: msgUser,
        className: className,
        top: top,
        right: right,
    };

    return setInfo;
}

function showNotification({ className, top = 0, right = 0, message }) {
    note.classList.add(className);
    note.style.top = `${top}px`;
    note.style.right = `${right}px`;
    msg.textContent = message;
}

showNotification(getInfo());