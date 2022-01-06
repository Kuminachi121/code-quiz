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


