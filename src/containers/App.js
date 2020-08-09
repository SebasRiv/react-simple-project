import React, { useState } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

function App() {

  // Declare the state variables using hooks 
  const [persons, setPersons] = useState([
    { id: '1', name: 'Max', age: 28 },
    { id: '2', name: 'Manu', age: 29 },
    { id: '3', name: 'Stephanie', age: 26 },
  ]);
  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = (event, id) => {

    // find person index
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });

    // destructuring to get attributes of the object
    const person = {
      ...persons[personIndex]
    };

    // capture input value
    person.name = event.target.value;

    // destructuring persons array
    const personsUpdated = [...persons];

    // update the persons whose name was changed
    personsUpdated[personIndex] = person;

    // update the persons array
    setPersons(personsUpdated);
  }

  const deletePersonsHandler = (personIndex) => {

    const actuallyPersons = [...persons];
    actuallyPersons.splice(personIndex, 1);
    setPersons(actuallyPersons);
  }

  const tooglePersonsHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
  }

  let personsToRender = null;

  // if is true show the persons
  if (showPersons) {
    personsToRender = <Persons
      persons={persons}
      changed={nameChangedHandler}
      clicked={deletePersonsHandler}
    />
  }

  return (
    <div className={classes.App}>
      <Cockpit
        showPersons={showPersons}
        persons={persons}
        clicked={tooglePersonsHandler}
      />
      {personsToRender}
    </div>
  );
}

export default App;
