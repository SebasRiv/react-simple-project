import React from 'react';
import classes from './Person.module.css';

const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.clicked}>Hi I'm {props.name} and I am {props.age} years old! </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person
