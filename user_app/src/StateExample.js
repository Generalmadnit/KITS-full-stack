import React, {useState} from 'react'

//This example, shows that when I click on the button, increment the number shown.

const StateExample = () => {
  const [number, setNumber] = useState(0);

  const buttonClicked = () => {
    const new_number = number + 1;
    setNumber(new_number);
  }

  return (
    <div>
      <p>{number}</p>
      <button onClick={buttonClicked}>Click me</button>
    </div>
  )
}

export default StateExample