import React from 'react';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="container text-center mt-5">
      <h2>Counter: {count}</h2>

      <button
        className="btn btn-success m-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        className="btn btn-danger m-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        className="btn btn-secondary m-2"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  )
}