// Array of alternative words to "Sorry"
const words = [
    "\"I'm sorry\"",
    "\"I'm so sorry\"",
    "\"I'm very sorry\"",
    "\"I'm really sorry\"",
    "\"I'm truly sorry\""
];

let currentIndex = 0;

function changeWord() {
    const wordElement = document.getElementById("changing-word");
    wordElement.classList.add("fade-out");
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        wordElement.textContent = words[currentIndex];
        wordElement.classList.remove("fade-out");
    }, 500);
}

// Start the word rotation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeWord, 2000);
});
