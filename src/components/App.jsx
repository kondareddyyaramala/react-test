import React from 'react';
import Header from './Header';
import Main from './Main';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
