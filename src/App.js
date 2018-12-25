import React, { 
	useState,
	useEffect,
	useContext,

	useReducer,
	useCallback,
	useMemo,
	useRef,
	useImperativeMethods,
	useLayoutEffect,
 } from 'react';

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
	decrease = e => setValue(value - 1),
	reset = e => setValue(0);

	return [value, increase, decrease, reset];
};

function App(props) {
	const
		[counterCount, increaseCounter, decreaseCounter, resetCounter] = useCounter(0),
		useInputResult = useInput('test');

	useEffect(() => {
		// Update the document title using the browser API
		document.title = `Your value is ${useInputResult.value}`;
	}, [counterCount]);

    return (
		<div>
			<input {...useInputResult}></input>
			<p>{ counterCount }</p>
			<button type="button" onClick={increaseCounter}>+</button>
			<button type="button" onClick={decreaseCounter}>-</button>
			<button type="button" onClick={resetCounter}>0</button>
		</div>
    );
}

export default App;