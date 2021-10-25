const answers = ["It is certain", 
                   "It is decidedly so", 
                   "Without a doubt", 
                   "Yes - definitely",
                   "You may rely on it", 
                   "As I see it, yes", 
                   "Most likely", 
                   "Outlook good", 
                   "Yes", 
                   "Signs point to yes",
                   "Don't count on it", 
                   "My reply is no",
                   "My sources say no", 
                   "Outlook not so good",
                   "Very doubtful", 
                   "No", 
                   "Ask again, nicely", 
                   "Yeah",
                   "Def No", 
                   "Definitely"];
    
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