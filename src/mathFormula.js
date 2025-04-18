import React from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX styles
import './MathFormulaStyles.css';

const ProbabilityFormula = () => {
  return (
    <div style={{ fontSize: "16px", textAlign: "left" }}>
      <div className="formula-container">
        <BlockMath math="P = \frac{1}{1 + e^{-z}} \times 100\%" />
      </div>
      {/* <p>где:</p>
      <div className="formula-container">
        <BlockMath math="z = -3.601 + 1.044 \times \text{Показатель1} + 1.502 \times \text{Показатель2} + 0.581 \times \text{Показатель3} + 0.217 \times \text{Показатель4}" />
      </div> */}
    </div>
  );
};

export default ProbabilityFormula;
