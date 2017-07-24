


//Progress bar timer
function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 300);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}


var questionNumber = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  ["In The Jungle Book who teaches Mowgli about The Bare Necesseties of life?", "Hong", "Baloo", "Bambi", "Akela", "B"],
  ["Cruella de Vil is the villain in which Disney movie?", "1001 Dalmatians", "All Dogs Go To Heaven", "Air Bud", "Rat Tails", "A"],
  ["In the movie Frozen, which song does Elsa sing as she builds the castle?", "Let It Go", "Love is an Open", "Reindeer are Better Than People", "NOTHING", "A"],
  ["What is the name of the boy who owns Buzz Lightyear in the movie Toy Story?", "Allen", "Woody", "Paulie", "Andy", "D"],
  ["Which Disney princess has a raccoon as a sidekick?", "Lion King", "Swiss Family Robinson", "Pocahontas", "Cars", "C"]
  ];

  function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(questionNumber >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "GAME OVER";
    
    // resets the variable to allow users to restart the test
    questionNumber = 0;
    correct = 0;
    
    // stops rest of renderQuestion function running when test is completed
    return false;
  }


  get("test_status").innerHTML = "Question "+(questionNumber+1)+" of "+questions.length;
  question = questions[questionNumber][0];
  chA = questions[questionNumber][1];
  chB = questions[questionNumber][2];
  chC = questions[questionNumber][3];
  chD = questions[questionNumber][4];
  
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";


}

//check the answer

function checkAnswer(){
    choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }


  }
  

  //add celebration pictures.

  //add wrong answer pictures.

  // tally correct answers.
  if(choice == questions[questionNumber][5]){
       correct++;
  }
 


  questionNumber++;

  // Go to next question

  renderQuestion();

}

  //reset the game

window.addEventListener("load", renderQuestion, false);