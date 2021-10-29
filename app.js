const answers = ["It is certain", 
  "It is decidedly so", 
  "Without a doubt", 
  "Don't count on it", 
  "My reply is no",
  "My sources say no",
];
                   
    
    window.onload = function() {
       const six = document.getElementById("six");
       const answer = document.getElementById("answer");
       const sixball = document.getElementById("six-ball");
       const question = document.getElementById("question");
       
       sixball.addEventListener("click", function() {
         if (question.value.length < 1) {
           alert('Enter a question!');
         } else {
           six.innerText = "";
           const num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         }
       });
    };

    //use another array