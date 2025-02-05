import React from 'react';

const ProfilePage = ({ studiedWords, achievements }) => {
  return (
    <div className="profile-page">
      <h1>Мой профиль</h1>
      <h2>Достижения</h2>
      <ul>
        <li>Игр сыграно: {achievements.gamesPlayed}</li>
        <li>Слов угадано: {achievements.wordsGuessed}</li>
      </ul>
      <h2>История изученных слов</h2>
      <ul>
        {studiedWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
