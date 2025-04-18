import React, { useState } from 'react';
import './App.css';
import ProbabilityFormula from './mathFormula';

function App() {
  const [number, setNumber] = useState({
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
  });

  const [result, setResult] = useState('');
  const [submitted, setSubmitted] = useState(false);


  function handleChange(event) {
      const input = event.target;
      const name = input.name;
      const value = input.value;
      setNumber({
        ...number,
        [name]: value
      });
    }

    function handleSubmit(event) {
      event.preventDefault();
      setSubmitted(true);

      const one = 0.126 * Number(number.one);
      const two = 0.772 * Number(number.two);
      const three = 1.785 * Number(number.three);
      const four = 0.363 * Number(number.four);
      const five = 0.571 * Number(number.five);

      const z = 13.730 + one + two - three + four - five;
      const P = (1 / (1 + Math.exp(-z))) * 100;
      setResult(P);

      // setSubmitted(false);
    }

  
  return (
      <div className="container">
          <h1 className='title'>Прогнозирование во втором триместре беременности поздних преждевременных спонтанных родов </h1>
          <p style={{ fontWeight: "bold" }}>Формула:</p>
          {/* <p>Р = (1 / (1 + е<sup>-z</sup>)) x 100%</p> */}
          {/* <p>z = (-3,601) + (1,044 × Показатель1) + (1,502 × Показатель2) + (0,581 × Показатель3) + (0,217 × Показатель4)</p> */}
          <ProbabilityFormula />
          <p>где:</p>
          <p>z = 13,730 + (0,126 × Показатель1) + (0,772 × Показатель2) - (1,785 × Показатель3) + (0,363 × Показатель4) - (0,571 × Показатель5)</p>
          <ul>
            <li>Показатель1 – Отягощенный акушерско-гинекологический анамнез (преждевременные роды в анамнезе, поздний выкидыш в анамнезе)</li>
            <li>Показатель2 – Дефект шейки матки (истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)</li>
            <li>Показатель3 – Инфекционно-воспалительные заболевания и дисбиотические состояния при настоящей беременности (рецидивирующий бактериальный вагиноз, острый вагинит, цервицит, инфекции мочевыводящих путей, бессимптомная бактериурия)</li>
            <li>Показатель4 – Количество лейкоцитов в микроскопическом исследовании отделяемого из цервикального канала в I–II триместре настоящей беременности (количество клеток. в поле зрения)</li>
            <li>Показатель5 – Длина шейки матки на втором ультразвуковом скрининге в 18<sup>0</sup>–20<sup>6</sup> недель (миллиметры)</li>
          </ul>

          {/* <div>
            <table>
              <tbody>
                <tr>
                <th style={{width: "120px", fontWeight: "bold"}}>Показатель</th>
                <th style={{width: "520px", fontWeight: "bold"}}>Название показателя</th>
                <th style={{width: "120px", fontWeight: "bold"}}>Значение</th>
                </tr>

                <tr>
                <th style={{width: "120px"}}>Показатель1</th>
                <th style={{width: "520px"}}>Отягощенный акушерско-гинекологический анамнез (преждевременные роды в анамнезе, поздний выкидыш в анамнезе)</th>
                <th style={{width: "120px"}}>
                  <div>0 - Нет</div>
                  <div>1 - Да</div>
                </th>
                </tr>

                <tr>
                <th style={{width: "120px"}}>Показатель2</th>
                <th style={{width: "520px"}}>Дефект шейки матки (истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)</th>
                <th style={{width: "120px"}}>
                  <div>0 - Нет</div>
                  <div>1 - Да</div>
                </th>
                </tr>

                <tr>
                <th style={{width: "120px"}}>Показатель3</th>
                <th style={{width: "520px"}}>Инфекционно-воспалительные заболевания и дисбиотические состояния при настоящей беременности (рецидивирующий бактериальный вагиноз, острый вагинит, цервицит, инфекции мочевыводящих путей, бессимптомная бактериурия)</th>
                <th style={{width: "120px"}}>
                  <div>0 - Нет</div>
                  <div>1 - Да</div>
                </th>
                </tr>

                <tr>
                <th style={{width: "120px"}}>Показатель4</th>
                <th style={{width: "520px"}}>Количество лейкоцитов в микроскопическом исследовании отделяемого из цервикального канала в I триместре настоящей беременности (количество клеток в поле зрения)</th>
                <th style={{width: "120px"}}></th>
                </tr>

              </tbody>
            </table>
          </div> */}

          <p style={{ fontWeight: "bold", paddingTop: "16px" }}>Интерпретация:</p>
          <p>0,520 и выше — Высокий риск</p>
          <p>ниже 0,520 — Низкий риск </p>

          <form onSubmit={handleSubmit}>
              <div className="tables">
                  <table>
                      <tbody>
                          <tr>
                              <th style={{width: "220px"}}>Показатель1
                                <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.4)" }}>0 - Нет, 1 - Да</div>
                              </th>
                              <th>
                                  <input
                                      type="number"
                                      placeholder="0 или 1"
                                      name="one"
                                      onChange={handleChange}
                                      value={number.one}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                          <tr>
                              <th style={{width: "220px"}}>Показатель2
                                <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.4)" }}>0 - Нет, 1 - Да</div>
                              </th>
                              <th>
                                  <input
                                      type="number"
                                      placeholder="0 или 1"
                                      name="two"
                                      onChange={handleChange}
                                      value={number.two}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                          <tr>
                              <th style={{width: "220px"}}>Показатель3
                                <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.4)" }}>0 - Нет, 1 - Да</div>
                              </th>
                              <th>
                                  <input
                                      type="number"
                                      placeholder="0 или 1"
                                      name="three"
                                      onChange={handleChange}
                                      value={number.three}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                          <tr>
                              <th style={{width: "220px"}}>Показатель4</th>
                              <th>
                                  <input
                                      type="number"
                                      // placeholder="0 или 1"
                                      name="four"
                                      onChange={handleChange}
                                      value={number.four}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                          <tr>
                              <th style={{width: "220px"}}>Показатель5</th>
                              <th>
                                  <input
                                      type="number"
                                      // placeholder="0 или 1"
                                      name="five"
                                      onChange={handleChange}
                                      value={number.five}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                      </tbody>   
                  </table>
              </div>
              <button type="submit">РАССЧИТАТЬ</button>
          </form>
          <div className="result-space" style={{ minHeight: '50px', paddingBottom: '30px' }}>
              {submitted && (
                  <div className="result">
                  Результат:
                  <span className={result > 0.520 ? 'result-red' : 'result-green'}> {result}</span>
                  <p className="information">{'Р > 0,520 - высокий риск'}</p>
                  <p className="information">{'Р < 0,520 - низкий риск'}</p>
              </div>
              )}
          </div>
      </div>
  );
}

export default App;
