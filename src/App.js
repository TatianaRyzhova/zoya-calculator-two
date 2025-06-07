import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    one: 0,
    two: '',
    three: 0,
    four: 0
  });
  const [result, setResult] = useState(null);
  const [risk, setRisk] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const calculate = () => {
    if (values.two === '') {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    const z = 12.135 + 0.008 * values.one - 0.432 * parseFloat(values.two) + 3.385 * values.three + 1.104 * values.four;
    const P = (1 / (1 + Math.exp(-z))) * 100;
    setResult(P.toFixed(2));
    setRisk(P > 50.9 ? 'Высокий риск' : 'Низкий риск');
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
        Длина шейки матки на втором ультразвуковом скрининге в 18<sup>0</sup>–20<sup>6</sup> недель (миллиметры)
          {/* <span className="description">(истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)</span> */}
        </label>
        <input type="number" name="two" value={values.two} onChange={handleChange} className="input-field" required/>
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
          Дефект шейки матки
          <span className="description">(истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)</span>
        </label>
        <select name="four" value={values.four} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
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
