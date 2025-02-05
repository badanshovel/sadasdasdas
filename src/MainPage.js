import React, { useState, useEffect } from "react";
import "./App.css";

const words = [
  { word: "Абстракция", definition: "Отвлечение от конкретных свойств предметов, обобщение." },
  { word: "Авангард", definition: "Передовая часть общества или искусства." },
  { word: "Адаптация", definition: "Приспособление к новым условиям." },
  { word: "Альтернатива", definition: "Выбор из нескольких возможных вариантов." },
  { word: "Амбиции", definition: "Стремление к достижению высоких целей." },
  { word: "Аналогия", definition: "Сходство между разными явлениями." },
  { word: "Аспект", definition: "Определённая сторона явления или вопроса." },
  { word: "Аргумент", definition: "Доказательство, приводимое в поддержку мнения." },
  { word: "Аристократия", definition: "Высший слой общества, элита." },
  { word: "Аутентичный", definition: "Подлинный, настоящий." },
  { word: "Баланс", definition: "Равновесие между различными частями." },
  { word: "Барьер", definition: "Препятствие, мешающее достижению цели." },
  { word: "Благотворительность", definition: "Помощь нуждающимся." },
  { word: "Биосфера", definition: "Область жизни на Земле." },
  { word: "Бюрократия", definition: "Система управления с жёсткими правилами." },
  { word: "Виртуальный", definition: "Существующий в цифровом мире." },
  { word: "Гармония", definition: "Согласованность и баланс элементов." },
  { word: "Гипотеза", definition: "Предположение, требующее проверки." },
  { word: "Глобализация", definition: "Процесс объединения мира в единую систему." },
  { word: "Гуманизм", definition: "Философия, ставящая человека в центр внимания." },
  { word: "Дедукция", definition: "Метод логического мышления от общего к частному." },
  { word: "Динамика", definition: "Изменение состояния со временем." },
  { word: "Дифференциация", definition: "Разделение на части по различным критериям." },
  { word: "Доктрина", definition: "Система взглядов и принципов." },
  { word: "Дуализм", definition: "Противоположность двух начал." },
  { word: "Идентичность", definition: "Осознание своей уникальности." },
  { word: "Идеология", definition: "Совокупность идей и взглядов." },
  { word: "Импровизация", definition: "Создание чего-либо без подготовки." },
  { word: "Индивидуальность", definition: "Неповторимые черты личности." },
  { word: "Инновация", definition: "Нововведение в сфере технологий или идей." },
  { word: "Интеллект", definition: "Способность к мышлению и анализу." },
  { word: "Интуиция", definition: "Понимание без логического обоснования." },
  { word: "Категория", definition: "Группа объектов с общими признаками." },
  { word: "Коммуникация", definition: "Процесс обмена информацией." },
  { word: "Компетенция", definition: "Круг знаний и умений в определённой области." },
  { word: "Консенсус", definition: "Общее согласие по вопросу." },
  { word: "Консерватизм", definition: "Приверженность традициям и старым порядкам." },
  { word: "Креативность", definition: "Способность к созданию нового." },
  { word: "Либерализм", definition: "Идеология свободы и равноправия." },
  { word: "Логика", definition: "Наука о правильном мышлении." },
  { word: "Манипуляция", definition: "Скрытое управление поведением других." },
  { word: "Метафора", definition: "Перенос значения одного слова на другое." },
  { word: "Модернизация", definition: "Обновление и совершенствование чего-либо." },
  { word: "Монополия", definition: "Исключительное право на что-либо." },
  { word: "Нейтралитет", definition: "Отсутствие участия в конфликте." },
  { word: "Оптимизация", definition: "Улучшение системы для повышения эффективности." },
  { word: "Парадигма", definition: "Совокупность идей и понятий." },
  { word: "Патриотизм", definition: "Любовь к своей родине." },
  { word: "Перспектива", definition: "Будущее развитие событий." },
  { word: "Плюрализм", definition: "Многообразие мнений и точек зрения." },
  { word: "Прагматизм", definition: "Подход, основанный на практической выгоде." },
  { word: "Принцип", definition: "Основное правило или положение." },
  { word: "Рефлексия", definition: "Анализ своих мыслей и действий." },
  { word: "Риторика", definition: "Искусство убеждать словами." },
  { word: "Сатисфакция", definition: "Удовлетворение от достигнутого." },
  { word: "Синергия", definition: "Совместное действие, дающее лучший результат." },
  { word: "Спекуляция", definition: "Действия, направленные на быструю выгоду." },
  { word: "Тенденция", definition: "Общая направленность развития." },
  { word: "Толерантность", definition: "Уважение к чужим взглядам и культуре." },
  { word: "Унификация", definition: "Приведение к единому стандарту." },
  { word: "Философия", definition: "Учение о бытии и сознании." },
  { word: "Харизма", definition: "Привлекательность личности, вызывающая доверие." },
  { word: "Экология", definition: "Наука о взаимодействии живых организмов и среды." },
  { word: "Эффективность", definition: "Соотношение результата и затраченных ресурсов." },
  { word: "Юрисдикция", definition: "Право на ведение дел в определённой области." },
  { word: "Явление", definition: "Факт или событие, имеющее значение." },
];


function App() {
  const [randomWord, setRandomWord] = useState(null);
  const [learnedWords, setLearnedWords] = useState([]);

  // Загружаем изученные слова при старте
  useEffect(() => {
    const savedWords = localStorage.getItem("learnedWords");
    if (savedWords) {
      setLearnedWords(JSON.parse(savedWords));
    }
  }, []);

  // Корректное сохранение в localStorage
  useEffect(() => {
    if (learnedWords.length > 0) {
      localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
    }
  }, [learnedWords]);

  const getRandomWord = () => {
    const availableWords = words.filter(w => !learnedWords.some(lw => lw.word === w.word));

    if (availableWords.length === 0) {
      setRandomWord(null);
      return;
    }

    const word = availableWords[Math.floor(Math.random() * availableWords.length)];
    setRandomWord(word);
  };

  const addToLearned = () => {
    if (randomWord && !learnedWords.some(w => w.word === randomWord.word)) {
      const newLearnedWords = [...learnedWords, randomWord];
      setLearnedWords(newLearnedWords);
      localStorage.setItem("learnedWords", JSON.stringify(newLearnedWords)); // Мгновенное сохранение
      setRandomWord(null); // Убираем текущее слово после добавления
    }
  };

  const clearLearnedWords = () => {
    setLearnedWords([]);
    localStorage.removeItem("learnedWords");
  };

  return (
    <div className="container">
      <h1>📖 Изучение новых слов</h1>
      <button className="btn" onClick={getRandomWord} disabled={learnedWords.length === words.length}>
        🎲 Случайное слово
      </button>

      {randomWord && (
        <div className="word-card">
          <h2>{randomWord.word}</h2>
          <p>{randomWord.definition}</p>
          <button className="btn add-btn" onClick={addToLearned}>✅ Добавить в изученные</button>
        </div>
      )}

      <h2>✅ Изученные слова</h2>
      {learnedWords.length > 0 ? (
        <>
          <ul className="word-list">
            {learnedWords.map((w, index) => (
              <li key={index}>{w.word}</li>
            ))}
          </ul>
          <button className="btn delete-btn" onClick={clearLearnedWords}>🗑 Очистить список</button>
        </>
      ) : (
        <p>Пока нет изученных слов.</p>
      )}

      {learnedWords.length === words.length && <p>🎉 Все слова изучены! Отличная работа!</p>}
    </div>
  );
}

export default App;
