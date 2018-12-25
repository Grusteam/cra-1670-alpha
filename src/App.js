import React, { useState } from 'react';

const useCounter = (init) => {
  const
  	[value, setValue] = useState(init),
	onChange = e => setValue(e.target.value);

	return {
		value,
		onChange,
	};
}

function App(props) {
    return (
		<input {...useCounter('test')}></input>
    );
}

export default App;