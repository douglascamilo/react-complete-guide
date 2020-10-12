import React, {Component} from 'react';
import './App.css';
import Radium from 'radium';
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

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p._id === personId);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let personsElement = null;
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    if (this.state.showPersons) {
      personsElement = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person._id}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person._id)} />
              )
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'].backgroundColor = 'salmon';
      style[':hover'].color = 'black';
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!!!</h1>
        <p className={classes.join(' ')}>This is really working!</p>

        <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle persons</button>

        { personsElement }
      </div>
    );
  }
}

export default Radium(App);
