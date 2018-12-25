import React, { useState } from 'react';

function App(props) {
  const [count, setCount] = useState(0);

    return (
      <div>
		<p>You clicked {count} times</p>
		<button onClick={() => setCount(count + 1)}>
			add
		</button>
		<button onClick={() => setCount(count + -1)}>
			substract
		</button>
		</div>
    );
}

export default App;
