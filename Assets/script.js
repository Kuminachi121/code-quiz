var startButton = document.getElementById("start-btn")

startButton.addEventListener("click", function () {
    var startRulesEl = document.querySelector(".start")

    startRulesEl.classList.add("hide")

    var startQuestionsEl = document.querySelector(".questions")

    startQuestionsEl.classList.remove("hide")
})

var ansButton = document.getElementById("answer-btn")

ansButton.addEventListener("click", function (){
    var choiceButtonEl = document.querySelector(".questions")

    choiceButtonEl.classList.add("hide")

    var nextQuestionEl = document.querySelector(".question-2")

    nextQuestionEl.classList.remove("hide")
})

var ansButton2 = document.getElementById("answer-btn2")

ansButton2.addEventListener("click", function(){
    var choiceButtonEl = document.querySelector(".question-2")

    choiceButtonEl.classList.add("hide")

    var ansButton3El = document.querySelector(".question-3")

    ansButton3El.classList.remove("hide")
})

var ansButton4 = document.getElementById("answer-btn3")

ansButton4.addEventListener("click", function(){
    var choiceButtonEl = document.querySelector(".question-3")

    choiceButtonEl.classList.add("hide")

    var ansButton4El = document.querySelector(".question-4")

    ansButton4El.classList.remove("hide")
})

var ansButton5 = document.getElementById("answer-btn4")

ansButton5.addEventListener("click", function(){
    var choiceButtonEl = document.querySelector(".question-4")

    choiceButtonEl.classList.add("hide")

    var ansButton5El = document.querySelector(".question-5")

    ansButton5El.classList.remove("hide")
})

var scorePage = document.getElementById("answer-btn5")

scorePage.addEventListener("click", function(){
    var choiceButtonEl = document.querySelector(".question-5")

    choiceButtonEl.classList.add("hide")

    var resultsPageEl = document.querySelector(".score-pg")

    resultsPageEl.classList.remove("hide")
})


