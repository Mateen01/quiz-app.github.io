questionArray = [
    {
        question: "How many fingers do humans have in hands?",
        answer: "10",
        options: [5, 8, 9, 10]
    },
    {
        question: "Capital of pakistan?",
        answer: "islamabad",
        options: ["karachi", "islamabad", "faisalabad", "hyderabad"]
    }
];

function showQues(e) {
    questions = document.getElementById("question");
    questions.innerHTML = questionArray[e].question
    options = document.getElementsByClassName("options");
    for (var i = 0; i < options.length; i++) {
        options[i].innerHTML = questionArray[e].options[i]
    }
}
count = 0;
score = 0;

function calc() {
    var radios = document.getElementsByClassName("radioBtn");
    var options = document.getElementsByClassName("options");
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            if (options[i].innerHTML == questionArray[count].answer) {
                score++
            }
        }
    }
}

function next() {
    calc()
    var radios = document.getElementsByClassName("radioBtn")
    if (count < questionArray.length - 1) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                count++
                showQues(count)
                radios[i].checked = false
            }
        }
    }
    else {
        mainVar = document.getElementsByClassName("main")
        mainVar[0].innerHTML = ""
        alert("Score is ==> " + score)
        
    }
}

// ------------------------------ Integrated Timer -------------------------------


hr = 0
min = 1
sec = 0
msec = 0
var minheading = document.getElementById('minHeading')
var secheading = document.getElementById('secHeading')
var miliheading = document.getElementById('miliHeading')

minheading.innerHTML = min
secheading.innerHTML = sec
miliheading.innerHTML = msec


var interval;

function timer() {
    console.log("timer is working")
    msec--
    miliheading.innerHTML = msec
    if (msec < 0) {
        sec--
        msec = 100
        secheading.innerHTML = sec
    }

    else if (sec < 0) {
        min--
        sec = 59
        minheading.innerHTML = min
    }
    else if (min < 0) {
        hr--
        //    hrPara.innerHTML = hr
        min = 60
    }
    
    else if (hr == 0 & min == 0 & sec == 0 & msec == 0) {
        console.log("timer done")
        clearInterval(interval)
        alert("Times Up!")
        // mainVar = document.getElementsByClassName("main1")
        // mainVar[0].innerHTML = ""
        document.body.innerHTML=""
        alert("Score is ==> " + score)

    }
    else if(count == 2){
    console.log("yeh")
    clearInterval(interval)
}

}
interval = setInterval(timer,10)
interval
