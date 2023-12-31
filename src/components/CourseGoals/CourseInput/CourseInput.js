import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid] = useState(false)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true)
    }
    else{
      setIsValid(false)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length ===0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsValid(false)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className = {`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" valid={!isValid ? 'invalid' : ''}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
