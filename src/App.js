import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className={'grid-container'}>
            <header className={'grid-header'}> Мои фоточки </header>
            <div className={'grid-main'}>тут фоточки</div>
            <div className={'grid-sidebar'}>Выбор шаблона</div>
            <footer className={'grid-footer'}>Авторские права и тд.</footer>
      </div>
    </div>
  );
}

export default App;
