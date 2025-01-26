import React from 'react';
import 'normalize.css';
import './styles/global.css';
import styles from './styles/test.module.css';

console.log('styles', styles);

console.log('env.', process.env.PUBLIC_URL);

export const App: React.FC = () => {
  console.log('render');
  console.log('st', styles);
  return (
    <div className={styles.test}>
      <h1>HELLO WORLD!</h1>
    </div>
  );
};