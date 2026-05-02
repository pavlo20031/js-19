// Change color
const bodyRef = document.querySelector("body");
const inpRef = document.querySelectorAll(".input");

inpRef.forEach((inp) => {
    inp.addEventListener("change", (evt) => {
        if (evt.target.checked) {
            bodyRef.style.backgroundColor = evt.target.value;
        };
    });
});

// Input
const inputRef = document.querySelector("#name-input");
const titleRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (evt) => {
    titleRef.textContent = evt.target.value;
});

// Blur
const inputsRef = document.querySelector("#validation-input");
inputsRef.addEventListener("blur", (evt) => {
    const num = Number(evt.target.dataset.length);
    if (evt.target.value.length === num) {
        inputsRef.classList.add("valid");
        inputsRef.classList.remove("invalid");
    } else if (evt.target.value.length === 0) {
        inputsRef.classList.remove("valid");
        inputsRef.classList.remove("invalid");
    } else {
        inputsRef.classList.add("invalid");
        inputsRef.classList.remove("valid");
    }
});

// Range 
const rangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

rangeRef.addEventListener("input", (evt) => {
    const size = evt.target.value + "px";
    textRef.style.fontSize = size;
})