import React, { useState } from 'react';
import MainPage from './MainPage';
import AddWordPage from './AddWordPage';
import FlashcardsPage from './FlashcardsPage';
import HelpPage from './HelpPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('main');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'main':
        return <MainPage />;
      case 'addWord':
        return <AddWordPage />;
      case 'flashcards':
        return <FlashcardsPage />;
      case 'help':
        return <HelpPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="app">
      <nav>
        <button onClick={() => setActiveTab('main')}>Главная</button>
        <button onClick={() => setActiveTab('addWord')}>Добавить слово</button>
        <button onClick={() => setActiveTab('flashcards')}>Карточки</button>
        <button onClick={() => setActiveTab('help')}>Подсказки</button>
      </nav>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default App;
