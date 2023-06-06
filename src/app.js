const emailInput = document.querySelector("#em");
const submitButton = document.querySelector("#submit-btn");
const form = document.querySelector("form");
const thankCard = document.querySelector('#thanks-card');
const mainCard = document.querySelector('#main-card');
const errorMessage = document.createElement("strong");
const dismissButton = document.querySelector("#dismiss-button");
const emailUser = document.querySelector("#email-user");

const validateEmail = () => {
    const pattern = emailInput.pattern;
    const rexPattern = new RegExp(pattern, "gi");
    let isValid = false;
    if (!rexPattern.test(emailInput.value)) {
        emailNotValid()
    } else {
        emailValid();
        isValid = true;
    }

    if (isValid) {
        displayThanks();
    }
}

const emailNotValid = () => {
    if (!form.querySelector("strong")) {
        createError();
        emailInput.classList.add("border-primary-tomato", "text-primary-tomato", "bg-red-200");
    }
};

const emailValid = () => {
    if (form.querySelector("strong")) {
        errorMessage.remove();
        emailInput.classList.remove("border-primary-tomato", "text-primary-tomato", "bg-red-200");
    }
}

const createError = () => {
    errorMessage.textContent = "Valid email required";
    errorMessage.setAttribute('class', 'absolute right-0 top-0 text-xs text-primary-tomato');
    errorMessage.setAttribute('style', 'top: 5px ; right: 0')
    form.appendChild(errorMessage);
}

const displayThanks = () => {
    thankCard.classList.remove('hidden');
    mainCard.classList.add('hidden');
    emailUser.textContent = emailInput.value;
}

submitButton.addEventListener('click', e => {
    validateEmail();
    e.preventDefault();
});

emailInput.addEventListener('keypress', e => {
    if (e.event === 'Enter') {
        submitButton.click();
    }
})

dismissButton.addEventListener('click', () => {
    thankCard.classList.add('hidden');
    mainCard.classList.remove('hidden');
})