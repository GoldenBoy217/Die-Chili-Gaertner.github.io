const questions = [
    {
        question: "Was sind illegalle Hobbys?",
        optionA: "Gärtnern",
        optionB: "rauchen",
        optionC: "Gras rauchen",
        optionD: "Wave",
        correctOption: "optionC"
    },

    {
        question: "Wie teuer ist ein Kilo der teuersten Chili der Welt?",
        optionA: "20.000 Euro",
        optionB: "1.000 Euro",
        optionC: "100.000 Euro",
        optionD: "5.000",
        correctOption: "optionA"
    },

    {
        question: "In welcher Einheit wird Schärfe gemessen?",
        optionA: "Sharpend grad",
        optionB: "Scavoille",
        optionC: "Scourille",
        optionD: "Scoville",
        correctOption: "optionD"
    },

    {
        question: "Kann man durch Chilis high werden?",
        optionA: "Ja",
        optionB: "Nein",
        optionC: "Vielleicht",
        optionD: "Unmöglich",
        correctOption: "optionA"
    },

    {
        question: "Zu welcher Pflanzengattung gehört die Chili?",
        optionA: "Obst",
        optionB: "Nuss",
        optionC: "Beeren",
        optionD: "Gemüse",
        correctOption: "optionC"
    },

    {
        question: "Liebhaber von scharfen Chilis wachen nach dem Tod im_____auf.",
        optionA: "Himmel",
        optionB: "Ring of Fire",
        optionC: "Chilisky",
        optionD: "Fireland",
        correctOption: "optionD"
    },

    {
        question: "Seit wann wird Chili angebaut?",
        optionA: "seit 10 000 Jahren",
        optionB: "seit 8 000 Jahren",
        optionC: "seit 4 000 Jahren",
        optionD: "seit 20 000 Jahren",
        correctOption: "optionB"
    },

    {
        question: "Wie viel schärfer ist die Smokin’ Ed’s Carolina Reaper im vergleich zu Tabasco?",
        optionA: "1000x",
        optionB: "300x",
        optionC: "15000x",
        optionD: "600x",
        correctOption: "optionD"
    },

    {
        question: "Was ist der schärfste Teil einer Chili?",
        optionA: "Kerne",
        optionB: "Strunk",
        optionC: "Fruchtfleisch",
        optionD: "Die ganze Schote ist gleich scharf",
        correctOption: "optionC"
    },

    {
        question: "Wie nennt man den Stoff der für die Schärfe der Chili sorgt?",
        optionA: "Scoville",
        optionB: "Capsaicin",
        optionC: "Capsin",
        optionD: "Methavitamin",
        correctOption: "optionB"
    },

    {
        question: "Was tun wenn Chili ins Auge gelangt?",
        optionA: "Alkohol zur Desinfiezierung",
        optionB: "Kühlen",
        optionC: "mit Wasser ausspülen",
        optionD: "ein paar Tropfen Milch ins Auge",
        correctOption: "optionD"
    },

    {
        question: "Wie oft würdest du bei uns Chili kaufen?",
        optionA: "immer wenn ich Chilis brauche",
        optionB: "täglich",
        optionC: "monatlich",
        optionD: "wöchentlich",
        correctOption: "optionB"
    },


    {
        question: "Welchen Untergrund bevorzugen Chilipflanzen?",
        optionA: "Erdigen",
        optionB: "Steinigen",
        optionC: "Lehmigen",
        optionD: "Sandigen",
        correctOption: "optionD"
    },

    {
        question: "Konsumiren die Inhaber Der Chili Gärtner viel Chili?",
        optionA: "Ja",
        optionB: "täglich",
        optionC: "Nein",
        optionD: "einzelne Inhaber konsumieren keine",
        correctOption: "optionD"
    },

    {
        question: "Seit wann besitzen die Chiligärtner Chilipflanzen?",
        optionA: "2022",
        optionB: "2010",
        optionC: "2021",
        optionD: "2023",
        correctOption: "optionA"
    },

    {
        question: "Was ist die schärfste Chilisoße?",
        optionA: "Tabasco",
        optionB: "Sharpend Angel",
        optionC: "Mad dog",
        optionD: "Habanero Red",
        correctOption: "optionC"
    }, 
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
   //called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


