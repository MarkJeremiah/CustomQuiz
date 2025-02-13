const questions = [
    {
        question: "What is my favorite color?",
        options: ["Blue", "Red", "Green", "Black"],
        correct: 2  
    },
    {
        question: "What is my favorite food?",
        options: ["Pizza", "Sushi", "Burger", "Pasta"],
        correct: 3  
    },
    {
        question: "When is my birthday?",
        options: ["March 9, 2003", "March 8, 2002", "March 8, 2003", "March 5, 2003"],
        correct: 2  
    },
    {
        question: "What is my middle name?",
        options: ["Devera", "Detera", "Delgado", "Dela Cruz"],
        correct: 1  
    },
    {
        question: "What was the first movie we watched together in cinema?",
        options: ["Insidious Part 1", "The Conjuring", "A Quiet Place", "The Nun"],
        correct: 3  
    },
    {
        question: "How many times have we gone to Intramuros?",
        options: ["3 times", "4 times", "7 times", "5 times"],
        correct: 3  
    },
    {
        question: "What is my favorite animal?",
        options: ["Cat", "Dog", "Elephant", "Tiger"],
        correct: 1  
    },
    {
        question: "What is my favorite movie genre?",
        options: ["Action", "Romance", "Horror", "Comedy"],
        correct: 2  
    },
    {
        question: "Who was the prettiest girl I've met?",
        options: ["Julia", "Elizabeth", "Julia Elizabeth", "Julia Elizabeth Torres"],
        correct: 3  
    },


];


let currentQuestionIndex = 0;

function openStartModal() {
    document.getElementById("startModal").style.display = "flex";
    document.getElementById("startOverlay").style.display = "block";
}

function startQuiz() {
    document.getElementById("startModal").style.display = "none";
    document.querySelector("#quizGif").style.display = "block";
    document.getElementById("startOverlay").style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".quiz-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = `<i class="fa-solid fa-question-circle"></i> ${questionData.question}`;
    
    const options = document.querySelectorAll(".option-btn");
    options.forEach((button, index) => {
        button.textContent = questionData.options[index];
        button.onclick = () => selectOption(index);
    });

    
    resetOptions();
    const correctBtn = options[questionData.correct];
    correctBtn.style.animation = "pickMe 0.8s ease-in-out infinite alternate";
}

function selectOption(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option-btn");
    let isCorrect = selectedIndex === questionData.correct;

    if (isCorrect) {
        nextQuestion();
    } else {
        
        const correctBtn = options[questionData.correct];
        correctBtn.style.backgroundColor = "#4CAF50"; 
        correctBtn.style.color = "white";
    }
}

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = `<i class="fa-solid fa-question-circle"></i> ${questionData.question}`;

    const options = document.querySelectorAll(".option-btn");
    options.forEach((button, index) => {
        button.textContent = questionData.options[index];
        button.onclick = () => selectOption(index);
    });

    resetOptions(); 
}

function selectOption(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option-btn");
    let isCorrect = selectedIndex === questionData.correct;

    if (isCorrect) {
        showCorrectModal(); 
    } else {
        
        const correctBtn = options[questionData.correct];
        correctBtn.style.backgroundColor = "#4CAF50"; 
        correctBtn.style.color = "white";
        correctBtn.style.animation = "pickMe 0.8s ease-in-out infinite alternate";
    }
}


const correctMessages = [
    "Awww, you really know me! 💖",
    "You're making my heart smile! 😊💕",
    "Yay! You're the best! 🥰",
    "You know me so well! 💘",
    "That was perfect—just like you! 💕",
    "My heart says yes! 💖✨",
    "You just made my day! 🌸",
    "I knew you'd get it right! 😘",
    "You're amazing! 💓"
];



function showCorrectModal() {

    
    const randomMessage = correctMessages[Math.floor(Math.random() * correctMessages.length)];

    
    document.getElementById("correctModal").innerHTML = `
        <h3>${randomMessage}</h3>
        <button onclick="closeCorrectModal()">Next Question</button>
    `;

    
    document.getElementById("correctModal").style.display = "flex";
    document.getElementById("correctOverlay").style.display = "block";
}


function closeCorrectModal() {
    document.getElementById("correctModal").style.display = "none";
    document.getElementById("correctOverlay").style.display = "none";
    nextQuestion();
}


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.querySelector(".quiz-container").style.display = "none";
        document.querySelector(".container").style.display = "none";
        openHeartModal();  
    }
}


function resetOptions() {
    document.querySelectorAll(".option-btn").forEach((button) => {
        button.style.backgroundColor = "";
        button.style.color = "";
        button.style.animation = "none"; 
    });
}





function closeModal() {
    document.getElementById("resultModal").style.display = "none";
    document.getElementById("resultOverlay").style.display = "none";
    nextQuestion();
}

function showValentineSection() {
    document.querySelector("#quizGif").style.display = "none";
    document.querySelector("#loveGif").style.display = "block";
    document.querySelector("#myGif").style.display = "block";
    document.getElementById("valentineSection").style.display = "block";
}


function sayYes() {
    document.getElementById("valentineModal").style.display = "flex";
    document.getElementById("valentineOverlay").style.display = "block";
    document.querySelector(".quiz-container").style.display = "none"; 
    document.querySelector("#quizGif").style.display = "none"; 
    document.querySelector("#myGif").style.display = "none"; 
    document.querySelector(".valentine-container").style.display = "none";
}


function closeValentineModal() {
    
    currentQuestionIndex = 0;
    document.getElementById("valentineModal").style.display = "none";
    document.getElementById("valentineOverlay").style.display = "none";
    

    
    
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".quiz-container").style.display = "none"; 
    document.querySelector("#quizGif").style.display = "none"; 
    document.querySelector("#loveGif").style.display = "none"; 
    document.querySelector("#myGif").style.display = "none"; 
    document.querySelector(".valentine-container").style.display = "none";

}
const noButton = document.querySelector('.no-btn');
const yesButton = document.querySelector('.yes-btn'); 


function chaseCursor(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    
    const shiftX = (mouseX - yesButton.offsetLeft - yesButton.offsetWidth / 2) * 0.1; 
    const shiftY = (mouseY - yesButton.offsetTop - yesButton.offsetHeight / 2) * 0.1;
    
    
    yesButton.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
    yesButton.style.transition = "transform 0.1s ease-out"; 
}


function resetYesButton() {
    yesButton.style.transform = "translate(0, 0)";
    yesButton.style.transition = "transform 0.5s ease-in-out"; 
}


function teaseEvade(e, button) {
    const rect = button.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;
    const distanceX = mouseX - btnCenterX;
    const distanceY = mouseY - btnCenterY;

    
    if (Math.abs(distanceX) < 80 && Math.abs(distanceY) < 50) {
        let shiftX = (Math.random() > 0.3 ? (distanceX > 0 ? -1 : 1) : 0) * (Math.random() * 60 + 30); 
        let shiftY = (Math.random() > 0.3 ? (distanceY > 0 ? -1 : 1) : 0) * (Math.random() * 60 + 30);

        let currentTransform = getComputedStyle(button).transform;
        let matrix = new DOMMatrix(currentTransform);
        let newX = matrix.m41 + shiftX;
        let newY = matrix.m42 + shiftY;

        button.style.transform = `translate(${newX}px, ${newY}px)`;
        button.style.transition = "transform 0.2s ease-out"; 
    }
}


function resetButton(button) {
    setTimeout(() => {
        button.style.transform = "translate(0, 0)";
        button.style.transition = "transform 0.5s ease-in-out"; 
    }, 500);
}


noButton.addEventListener('mousemove', (e) => teaseEvade(e, noButton));  
noButton.addEventListener('mouseleave', () => resetButton(noButton)); 


noButton.addEventListener('mouseenter', () => {
    document.addEventListener('mousemove', chaseCursor); 
});

noButton.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', chaseCursor); 
    resetYesButton(); 
});



function openHeartModal() {
    document.getElementById('heartModal').style.display = 'flex';
    document.getElementById('heartOverlay').style.display = 'block';
}


function closeHeartModal() {
    
    document.getElementById('heartModal').style.display = 'none';
    document.getElementById('heartOverlay').style.display = 'none';
    
    
    showValentineSection();
}




