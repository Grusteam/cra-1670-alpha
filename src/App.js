import React, { useState } from 'react';

const useCounter = (init) => {
  const [value, setValue] = useState(init);

  function onChange(e) {
	  setValue(e.target.value);
  }

	return {
		value,
		onChange,
	};
}

function App(props) {

    return (
		<input {...useCounter('хуй')}></input>
    );
}

export default App;
