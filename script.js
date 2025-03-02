document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.querySelector(".typing");
    const textArray = ["Training Software Developer at Moringa", "Passionate About Tech"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        let currentText = textArray[textIndex];
        typingElement.textContent = isDeleting ? currentText.substring(0, charIndex--) : currentText.substring(0, charIndex++);
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 100000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }

    typeEffect();
});
