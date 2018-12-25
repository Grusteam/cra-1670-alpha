import React, { useState } from 'react';

const useInput = (init) => {
  const
  	[value, setValue] = useState(init),
	onChange = e => setValue(e.target.value);

	return {
		value,
		onChange,
	};
};

const useCounter = (init) => {
  const
  	[value, setValue] = useState(init),
	increase = e => setValue(value + 1),
	decrease = e => setValue(value - 1);

	return [value, increase, decrease];
};

function App(props) {
	const [counterCount, increaseCounterHandleClick, decreaseCounterHandleClick] = useCounter(0);

    return (
		<div>
			<input {...useInput('test')}></input>
			<p>{ counterCount }</p>
			<button type="button" onClick={increaseCounterHandleClick}>+</button>
			<button type="button" onClick={decreaseCounterHandleClick}>-</button>
		</div>
    );
}

export default App;