import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isEditing, setIsEditing] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsEditing(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsEditing(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isEditing && styles.invalid}`}>
        <label>Course Goal</label>
        <input
        value={enteredValue}
         type="text"  
         onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
