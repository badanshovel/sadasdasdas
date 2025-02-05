import React, { useState, useEffect } from 'react';

const QuizPage = ({ setAchievements, words }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const quizQuestions = words.map(word => ({
      question: word.word,
      options: [
        word.definition,
        words[Math.floor(Math.random() * words.length)].definition,
        words[Math.floor(Math.random() * words.length)].definition,
      ].sort(() => Math.random() - 0.5),
      correctAnswer: word.definition,
    }));
    setQuestions(quizQuestions);
  }, [words]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setAchievements(prev => ({ ...prev, wordsGuessed: prev.wordsGuessed + 1 }));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
      setAchievements(prev => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
    }
  };

  return (
    <div className="quiz-page">
      <h1>Викторина</h1>
      {gameOver ? (
        <div>
          <h2>Игра окончена!</h2>
          <p>Ваш результат: {score} из {questions.length}</p>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion]?.question}</h2>
          {questions[currentQuestion]?.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
