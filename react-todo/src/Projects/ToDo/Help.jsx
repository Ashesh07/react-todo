/*
! Using useState for the input value in this Todo app serves several important purposes beyond what plain HTML form inputs provide:

! Controlled Components - This creates what React calls a "controlled component" where React is the single source of truth for the input's value. This means:
! The input's value is always driven by React state. Changes to the input must go through React's state management .You have complete control over input validation and transformation


! Two-way Data Binding - By setting the input's value={inputValue} and using onChange to update state, you create a two-way binding that ensures:
! The DOM always reflects the current React state
! User interactions (typing) properly update the state

! Form Reset - It allows easily clearing the input after submission with setInputValue(""), which wouldn't be possible with an uncontrolled input
! Duplicate Prevention - This code checks if the task already exists (task.includes(inputValue)) and clears the input if it does, preventing duplicates
! Validation Logic - The form submission handler checks if(!inputValue) return to prevent empty tasks

! Without using state, you'd lose these benefits and would need to use DOM manipulation (like refs) to clear the input or read its value, which is less "React-like" and more error-prone.
! A plain HTML approach would let users type in the field, but you'd lose React's declarative approach to managing application state and the ability to easily process the input data before submission.
*/

//todo : <- ignore todo : onClick, onChange etc. use callback function when passing arguments because if not done it will keep calling itself infinitely at the start of the page render