const dynamicTextElement = document.getElementById("dynamic-text");
const textToType = "one-pagers";
let index = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textToType.substring(0, index);

    dynamicTextElement.textContent = currentText;

    if (isDeleting) {
        index--;
    } else {
        index++;
    }

    if (index === textToType.length + 1) {
        isDeleting = true;
    } else if (index === 0) {
        isDeleting = false;
    }

    const typingSpeed = isDeleting ? 100 : 200;

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();
