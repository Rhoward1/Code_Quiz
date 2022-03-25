
# html
1. start screen with title, rules, start button, timer
2. Question screen container with question text, buttons, timer
3. end of game container with final score, form to enter initials and submit button
4. high score page- using local storage.






## Javascript

1. declare variables to referance dom elements in your html document.
    -startQuizBtn
    -startScreenEl 
    -tmierEl
    -highScoreEl
    -questionEl
    -questionTitleEl
    -answerChoicesEl
    toggle?

2. Create an array onf objects that hold all questions -- can be a seperate JS file
    -answer choices 
    -Question text
    -Correct answer

3. create a startQuiz() function triggered by the StartQuizBtn
    -hide start csreen      
    -unhide question screen
    -start timer
    -grab first question in the array 

4. create a function to getQuestion() 
    -render title, choices and buttons  

5. create a function to check if an answer is corret
    -iff answer is correct, move on to next question
    -if the answer is wrong then decrement timer and move to the next question.
    -keep track of score/points
    -increment index in array to move on

6. create a function to endQuiz()
    -hide this questionEl
    -unhide end of quiz element
    -unhide your final score element, form, submit button.

7. Create functionality to save high scores to localStorage   



