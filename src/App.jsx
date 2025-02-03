import React, { useState, useEffect } from 'react';

    const questions = [
      {
        question: "What is the full name of Ross and Monica's dog in childhood?",
        answer: "Chi-Chi",
      },
      {
        question: "What was the name of Ross's second wife?",
        answer: "Emily Waltham",
      },
      {
        question: "What fruit is Ross allergic to?",
        answer: "Kiwi",
      },
      {
        question: "What is the name of Joey’s stuffed penguin?",
        answer: "Hugsy",
      },
      {
        question: "Who was the last of the six friends to move out of their apartment?",
        answer: "Rachel",
      },
      {
        question: "What was the name of Chandler’s annoying ex-girlfriend?",
        answer: "Janice",
      },
      {
        question: "How many sisters does Joey have?",
        answer: "Seven",
      },
      {
        question: "What is Joey’s catchphrase?",
        answer: '"How you doin\'?"',
      },
      {
        question: "What was the name of Rachel’s boss whom she briefly dated?",
        answer: "Gavin",
      },
      {
        question: "Who did Ross marry in Las Vegas while drunk?",
        answer: "Rachel",
      },
      {
        question: "What is the name of the woman that Chandler falls in love with while stuck in an ATM vestibule?",
        answer: "Jill Goodacre",
      },
      {
        question: "Who does Joey develop romantic feelings for in later seasons?",
        answer: "Rachel",
      },
      {
        question: "How many times has Ross been married?",
        answer: "Three",
      },
      {
        question: "What was the name of Monica’s billionaire boyfriend?",
        answer: "Pete Becker",
      },
      {
        question: "Who was the first friend to find out about Monica and Chandler’s relationship?",
        answer: "Joey",
      },
      {
        question: "Which of Phoebe’s boyfriends moved to Minsk?",
        answer: "David",
      },
      {
        question: "What is the name of Ross and Rachel’s daughter?",
        answer: "Emma",
      },
      {
        question: "What unusual name did Phoebe suggest for one of the triplets she gave birth to?",
        answer: "Chandler",
      },
      {
        question: "What does Ross yell when trying to get his couch up the stairs?",
        answer: '"Pivot! Pivot! Pivot!"',
      },
      {
        question: "What item did Joey buy when he finally got a big acting paycheck?",
        answer: "A porcelain white dog statue",
      },
      {
        question: "What was the name of Joey’s character on Days of Our Lives?",
        answer: "Dr. Drake Ramoray",
      },
      {
        question: "What were the names of Ross and Monica’s parents?",
        answer: "Jack and Judy Geller",
      },
      {
        question: "What is Chandler Bing’s middle name?",
        answer: "Muriel",
      },
      {
        question: "What does Phoebe find in a soda can that earns her compensation money?",
        answer: "A human thumb",
      },
      {
        question: "What is the name of Joey and Chandler’s pet chick and duck?",
        answer: "The Chick and the Duck",
      },
      {
        question: "What game do Ross and Chandler play obsessively in their college days?",
        answer: "Bamboozled",
      },
      {
        question: "What does Joey dress up as for Ross’ son Ben’s Halloween party?",
        answer: "Chandler",
      },
      {
        question: "What name did Ross almost say at his wedding to Emily?",
        answer: "Rachel",
      },
      {
        question: "What was Chandler’s job before switching careers?",
        answer: "Statistical analysis and data reconfiguration",
      },
      {
        question: "What job did Rachel have when the series started?",
        answer: "Waitress at Central Perk",
      },
      {
        question: "What is the name of the fashion company Rachel works for in later seasons?",
        answer: "Ralph Lauren",
      },
      {
        question: "What was the name of Joey’s agent?",
        answer: "Estelle Leonard",
      },
      {
        question: "Which character worked as a masseuse?",
        answer: "Phoebe",
      },
      {
        question: "What unusual job did Ross briefly take at a museum?",
        answer: "Dinosaur Bone Cleaner",
      },
      {
        question: "Who was Ross' competition for a paleontology grant?",
        answer: "Charlie Wheeler",
      },
      {
        question: "Where did Monica work as a chef before opening her own restaurant?",
        answer: "Alessandro’s",
      },
      {
        question: "What was the name of the play Joey starred in, where he had to wear lipstick?",
        answer: "Freud!",
      },
      {
        question: "What was the title of Joey's imaginary childhood friend?",
        answer: "Maurice, the Space Cowboy",
      },
      {
        question: "What is the name of the song Phoebe is famous for singing?",
        answer: "Smelly Cat",
      },
      {
        question: "What fruit does Ross accidentally put on his face, causing a reaction?",
        answer: "Kiwi",
      },
      {
        question: "What game show does Joey audition for as a host?",
        answer: "Bamboozled",
      },
      {
        question: "What is the name of the holiday armadillo?",
        answer: "Ross",
      },
      {
        question: "What does Monica label her Thanksgiving leftovers sandwich that Ross loves?",
        answer: "The Moist Maker",
      },
      {
        question: "What is the name of Joey’s twin in a commercial?",
        answer: "Carl",
      },
      {
        question: "Which character once got trapped in an ATM vestibule?",
        answer: "Chandler",
      },
      {
        question: "What type of animal does Phoebe believe her mother was reincarnated as?",
        answer: "A cat",
      },
      {
        question: "Who was the last of the friends to get married?",
        answer: "Chandler and Monica (in the series timeline)",
      },
      {
        question: "Where does the gang travel for Ross’ failed wedding?",
        answer: "London",
      },
    ];

    function App() {
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
      const [shuffledQuestions, setShuffledQuestions] = useState([]);
      const [gameStarted, setGameStarted] = useState(false);
      const [darkMode, setDarkMode] = useState(false);
      const [showAnswer, setShowAnswer] = useState(false);

      useEffect(() => {
        if (gameStarted) {
          const shuffled = [...questions].sort(() => Math.random() - 0.5);
          setShuffledQuestions(shuffled);
          setCurrentQuestionIndex(0);
        }
      }, [gameStarted]);

      const handleStartGame = () => {
        setGameStarted(true);
      };

      const handleNextQuestion = () => {
        setShowAnswer(false);
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      };

      const handlePlayAgain = () => {
        setGameStarted(true);
      };

      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
      };

      const handleShowAnswer = () => {
        setShowAnswer(true);
      };

      const renderContent = () => {
        if (!gameStarted) {
          return <button onClick={handleStartGame}>Start!</button>;
        }

        if (currentQuestionIndex < shuffledQuestions.length && shuffledQuestions.length > 0) {
          return (
            <>
              <h2>{shuffledQuestions[currentQuestionIndex].question}</h2>
              {!showAnswer && (
                <button onClick={handleShowAnswer}>Show me the answer</button>
              )}
              {showAnswer && (
                <p>Answer: {shuffledQuestions[currentQuestionIndex].answer}</p>
              )}
              <button onClick={handleNextQuestion}>Next Question</button>
            </>
          );
        }

        return (
          <>
            <h2>Play again?</h2>
            <button onClick={handlePlayAgain}>Yes</button>
          </>
        );
      };

      return (
        <div className="container">
          <h1>"Friends" Trivia Game</h1>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          {renderContent()}
          <footer>Developed by Quintin</footer>
        </div>
      );
    }

    export default App;
