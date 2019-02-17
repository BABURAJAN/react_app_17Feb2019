import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting />
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    const greeting = 'Welcome to React';

    return <h1>{greeting}</h1>;
  }
}

export default App;