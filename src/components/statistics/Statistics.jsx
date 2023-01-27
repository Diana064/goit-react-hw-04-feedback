import React from 'react';
import css from './Statictics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>
      good:<span className={css.number}>{good}</span>
    </p>
    <p>
      neutral:<span className={css.number}>{neutral}</span>
    </p>
    <p>
      bad:<span className={css.number}>{bad}</span>
    </p>
    <p>
      total: <span className={css.number}>{total}</span>
    </p>
    <p>
      positivePercentage:
      <span className={css.number}>{positivePercentage}</span>
    </p>
  </div>
);
export default Statistics;
