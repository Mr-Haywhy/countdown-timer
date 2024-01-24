// Launch app
// if (typeof window !== 'undefined') {
//     document.addEventListener("readystatechange", (event) => {
//         if (event.target.readyState === "complete") {
//             initApp();
//         }
//     });
// };

// const initApp = () => {
//     // Add listeners
//     const itemEntryForm = document.getElementById("itemEntryForm");
//     itemEntryForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         processSubmission();
//     });

//     refreshThePage();
// };

// const refreshThePage = () => {
//     clearItemEntryField();
//     setFocusOnItemEntry();
// };


// const clearItemEntryField = () => {
//     document.getElementById("birthDate").value = "";
// };

// const setFocusOnItemEntry = () => {
//     document.getElementById("birthDate").focus();
// };

// const processSubmission = () => {
//     const newEntryText = newBirthDate();
//     if (!newEntryText.length) return;
//     updateScreenReaderConfirmation(newEntryText, "added");
//     refreshThePage();
// };

// const newBirthDate = () => {
//     return document.getElementById("birthDate").value.trim();
// };
// // 



const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// const birthDate = document.getElementById("submit").onclick = () => {
//     birthDate = document.getElementById("birthDate").value;
// };
const newDate = "17 July 2024";

function countdown() {
    const nextBirthDate = new Date(newDate);
    const currentDate = new Date();

    const totalSeconds = (nextBirthDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}

countdown();

setInterval(countdown, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
};