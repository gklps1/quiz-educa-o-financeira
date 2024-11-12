const questions = [
    {
        question: "O que é uma ação no mercado financeiro?",
        answers: [
            { text: "Uma parte de uma empresa", correct: true },
            { text: "Um tipo de empréstimo", correct: false },
            { text: "Um investimento sem risco", correct: false },
            { text: "Um fundo de investimento", correct: false }
        ],
        explanation: "Uma ação representa uma fração do capital de uma empresa. Ao comprar ações, você se torna sócio da empresa."
    },
    {
        question: "Qual é a principal função da bolsa de valores?",
        answers: [
            { text: "Facilitar a venda de produtos", correct: false },
            { text: "Facilitar a compra e venda de ações", correct: true },
            { text: "Oferecer empréstimos", correct: false },
            { text: "Proteger empresas", correct: false }
        ],
        explanation: "A bolsa de valores permite a negociação de ações, facilitando o processo de compra e venda entre investidores."
    },
    {
        question: "O que significa diversificar investimentos?",
        answers: [
            { text: "Investir em diferentes ativos", correct: true },
            { text: "Concentrar o dinheiro em uma empresa", correct: false },
            { text: "Evitar investimentos de longo prazo", correct: false },
            { text: "Apostar apenas em ações", correct: false }
        ],
        explanation: "Diversificar é distribuir o capital entre diferentes tipos de investimentos para reduzir riscos."
    },
    {
        question: "O que é uma corretora de valores?",
        answers: [
            { text: "Uma instituição que facilita a compra e venda de ativos", correct: true },
            { text: "Uma empresa que fabrica ações", correct: false },
            { text: "Um tipo de banco de investimento", correct: false },
            { text: "Uma plataforma de negociação internacional", correct: false }
        ],
        explanation: "Corretoras de valores são intermediárias que facilitam a compra e venda de ativos no mercado financeiro."
    },
    {
        question: "O que é o Índice Bovespa?",
        answers: [
            { text: "O rendimento de um fundo imobiliário", correct: false },
            { text: "Um índice que mede o desempenho das principais ações brasileiras", correct: true },
            { text: "A taxa de juros brasileira", correct: false },
            { text: "Uma plataforma de negociação", correct: false }
        ],
        explanation: "O Índice Bovespa mede o desempenho das ações mais negociadas na bolsa de valores brasileira."
    },
    {
        question: "O que é um fundo de investimento?",
        answers: [
            { text: "Um tipo de poupança", correct: false },
            { text: "Uma carteira de ativos administrada por uma gestora", correct: true },
            { text: "Um investimento sem risco", correct: false },
            { text: "Um empréstimo para empresas", correct: false }
        ],
        explanation: "Um fundo de investimento reúne recursos de várias pessoas para investir em uma carteira diversificada de ativos."
    },
    {
        question: "Qual é a diferença entre renda fixa e renda variável?",
        answers: [
            { text: "Renda fixa oferece retorno previsível, enquanto renda variável não", correct: true },
            { text: "Renda fixa é mais arriscada", correct: false },
            { text: "Renda variável só inclui ações", correct: false },
            { text: "Não há diferença", correct: false }
        ],
        explanation: "Na renda fixa, o retorno é previsível; na renda variável, o retorno pode variar, como no caso das ações."
    },
    {
        question: "O que é o Tesouro Direto?",
        answers: [
            { text: "Uma corretora", correct: false },
            { text: "Um programa de títulos públicos acessíveis para investidores", correct: true },
            { text: "Um índice da bolsa", correct: false },
            { text: "Uma criptomoeda", correct: false }
        ],
        explanation: "O Tesouro Direto permite que investidores comprem títulos públicos do governo brasileiro."
    },
    {
        question: "Qual é a função do CDI (Certificado de Depósito Interbancário)?",
        answers: [
            { text: "Definir o valor de uma ação", correct: false },
            { text: "Regular empréstimos entre bancos", correct: true },
            { text: "Oferecer proteção contra inflação", correct: false },
            { text: "Definir a taxa Selic", correct: false }
        ],
        explanation: "O CDI representa empréstimos de curto prazo entre bancos e influencia a taxa de juros de outros investimentos."
    },
    {
        question: "O que é a taxa Selic?",
        answers: [
            { text: "Uma taxa de inflação", correct: false },
            { text: "A taxa básica de juros da economia brasileira", correct: true },
            { text: "O rendimento de ações", correct: false },
            { text: "O valor do dólar", correct: false }
        ],
        explanation: "A taxa Selic é a taxa básica de juros da economia, influenciando o custo de empréstimos e o rendimento da renda fixa."
    },
    {
        question: "O que significa a sigla IPO?",
        answers: [
            { text: "Índice de Preço de Ouro", correct: false },
            { text: "Oferta Pública Inicial", correct: true },
            { text: "Opções de Investimento Privado", correct: false },
            { text: "Organização Pública de Investimento", correct: false }
        ],
        explanation: "IPO é a primeira oferta de ações de uma empresa para o público na bolsa de valores."
    },
    {
        question: "Qual é a função dos dividendos?",
        answers: [
            { text: "Premiar bons investimentos", correct: false },
            { text: "Distribuir parte dos lucros da empresa aos acionistas", correct: true },
            { text: "Oferecer retorno garantido", correct: false },
            { text: "Aumentar o valor das ações", correct: false }
        ],
        explanation: "Dividendos são parte dos lucros que empresas distribuem aos seus acionistas como retorno sobre o investimento."
    },
    {
        question: "O que é um fundo imobiliário?",
        answers: [
            { text: "Um tipo de ação", correct: false },
            { text: "Um fundo que investe em imóveis", correct: true },
            { text: "Um tipo de empréstimo para construção", correct: false },
            { text: "Uma conta poupança para imóveis", correct: false }
        ],
        explanation: "Fundos imobiliários são fundos que investem em ativos do setor imobiliário, como imóveis e títulos de dívida imobiliária."
    },
    {
        question: "O que é alavancagem?",
        answers: [
            { text: "Investir com recursos próprios", correct: false },
            { text: "Investir com recursos emprestados para aumentar o retorno", correct: true },
            { text: "Investir apenas em renda fixa", correct: false },
            { text: "Evitar investimentos de alto risco", correct: false }
        ],
        explanation: "A alavancagem consiste em utilizar recursos de terceiros para aumentar a capacidade de investimento e potencializar os retornos."
    },
    {
        question: "O que é um ETF?",
        answers: [
            { text: "Um tipo de criptomoeda", correct: false },
            { text: "Um fundo negociado em bolsa que replica índices", correct: true },
            { text: "Uma taxa de câmbio fixa", correct: false },
            { text: "Um empréstimo de curto prazo", correct: false }
        ],
        explanation: "Um ETF (Exchange Traded Fund) é um fundo que segue um índice e é negociado na bolsa, permitindo diversificação em um só ativo."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = [];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explanationElement = document.getElementById("explanation");
const scoreElement = document.getElementById("score");
const reviewContainer = document.getElementById("review-container");
const reviewList = document.getElementById("review-list");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = [];
    scoreElement.textContent = '';
    nextButton.style.display = "none";
    reviewContainer.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    explanationElement.innerText = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    explanationElement.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(button, answer) {
    if (answer.correct) {
        button.style.backgroundColor = "#43a047";
        score++;
    } else {
        button.style.backgroundColor = "#d32f2f";
        incorrectAnswers.push({
            question: questions[currentQuestionIndex].question,
            correctAnswer: questions[currentQuestionIndex].answers.find(a => a.correct).text,
            explanation: questions[currentQuestionIndex].explanation
        });
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    showExplanation();
    nextButton.style.display = "block";
}

function showExplanation() {
    explanationElement.style.display = "block";
    explanationElement.innerText = questions[currentQuestionIndex].explanation;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
    scoreElement.innerText = `Pontuação final: ${score}`;
    if (incorrectAnswers.length > 0) {
        showReview();
    }
    nextButton.innerText = "Reiniciar";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);
}

function showReview() {
    reviewContainer.style.display = "block";
    reviewList.innerHTML = "";
    incorrectAnswers.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Questão:</strong> ${item.question}<br>
                              <strong>Resposta correta:</strong> ${item.correctAnswer}<br>
                              <em>${item.explanation}</em>`;
        reviewList.appendChild(listItem);
    });
}

startQuiz();
