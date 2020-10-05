import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { _id: '001', name: 'Max', age: 28 },
      { _id: '002', name: 'Manu', age: 29 },
      { _id: '003', name: 'Stephen', age: 26 },
    ],
    showPersons: false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephen', age: 26 },
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person._id}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} />
              )
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!!!</h1>
        <p>This is really working!</p>

        <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle persons</button>

        { persons }
      </div>
    );
  }
}

export default App;
