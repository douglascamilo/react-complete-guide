import React, {Component} from 'react';
import classes from './App.css';
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
    const assignedClasses = [];
    let personsElement = null;
    let buttonClass = '';

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    if (this.state.showPersons) {
      buttonClass = classes.Red;

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
                        changed={(event) => this.nameChangedHandler(event, person._id)}/>
                )
              })
            }
          </div>
      );
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app!!!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>

        <button
          className={buttonClass}
          onClick={this.togglePersonsHandler}>Toggle persons</button>

        { personsElement }
      </div>
    );
  }
}

export default App;
