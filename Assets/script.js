var startButton = document.getElementById("start-btn")

startButton.addEventListener("click", function () {
    var startRulesEl = document.querySelector(".start")

    startRulesEl.classList.add("hide")

    var startQuestionsEl = document.querySelector(".questions")

    startQuestionsEl.classList.remove("hide")
})

