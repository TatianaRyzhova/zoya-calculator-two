import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: '',
    five: ''
  });
  const [result, setResult] = useState(null);
  const [risk, setRisk] = useState('');

  const indicators = [
    {
      title: 'Показатель1',
      description: 'Отягощенный акушерско-гинекологический анамнез (преждевременные роды в анамнезе, поздний выкидыш в анамнезе)',
    },
    {
      title: 'Показатель2',
      description: 'Дефект шейки матки (истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)',
    },
    {
      title: 'Показатель3',
      description: 'Инфекционно-воспалительные заболевания и дисбиотические состояния при настоящей беременности (рецидивирующий бактериальный вагиноз, острый вагинит, цервицит, инфекции мочевыводящих путей, бессимптомная бактериурия)',
    },
    {
      title: 'Показатель4',
      description: 'Количество лейкоцитов в микроскопическом исследовании отделяемого из цервикального канала в I–II триместре настоящей беременности (количество клеток в поле зрения)',
    },
    {
      title: 'Показатель5',
      description: 'Длина шейки матки на втором ультразвуковом скрининге в 18⁰–20⁶ недель (миллиметры)',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const calculate = () => {
    if (values.four === '' || values.five === '') {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    const z = 13.730 + 0.126 * values.one + 0.772 * values.two - 1.785 * values.three + 0.363 * values.four - 0.571 * values.five;
    const P = (1 / (1 + Math.exp(-z))) * 100;
    setResult(P.toFixed(2));
    setRisk(P > 52.0 ? 'Высокий риск' : 'Низкий риск');
  };

  return (
    <div className="container">
      <h1 className='title'>Прогнозирование во втором триместре беременности поздних преждевременных спонтанных родов </h1>
    

      <div className="form-group">
        <label>
          Отягощенный акушерско-гинекологический анамнез
          <span className="description">(преждевременные роды в анамнезе, поздний выкидыш в анамнезе)</span>
        </label>
        <select name="one" value={values.one} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Дефект шейки матки
          <span className="description">(истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)</span>
        </label>
        <select name="two" value={values.two} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Инфекционно-воспалительные заболевания и дисбиотические состояния при настоящей беременности
          <span className="description">(рецидивирующий бактериальный вагиноз, острый вагинит, цервицит, инфекции мочевыводящих путей, бессимптомная бактериурия)</span>
        </label>
        <select name="three" value={values.three} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Количество лейкоцитов в микроскопическом исследовании отделяемого из цервикального канала в I–II триместре настоящей беременности
          <span className="description">(количество клеток в поле зрения)</span>
        </label>
        <input type="number" name="four" value={values.four} onChange={handleChange} className="input-field" required/>
      </div>

      <div className="form-group">
        <label>
          Длина шейки матки на втором ультразвуковом скрининге в 18<sup>0</sup>–20<sup>6</sup> недель
          <span className="description">(миллиметры)</span>
        </label>
        <input type="number" name="five" value={values.five} onChange={handleChange} className="input-field" required/>
      </div>

      <button className="calculate-button" onClick={calculate}>Рассчитать</button>

      {result && (
        <div className="result">
          <p>Вероятность: <strong>{result}%</strong></p>
          <p>Результат: <strong>{risk}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
