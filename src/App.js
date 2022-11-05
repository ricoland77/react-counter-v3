import "./App.css";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div>
      {counters.length < 3 && (
        <div className="top-add-counter">
          <div>
            <button
              onClick={() => {
                const newCounters = [...counters];
                newCounters.push(0);
                setCounters(newCounters);
              }}
            >
              Add counter
            </button>
          </div>
        </div>
      )}

      <div className="container">
        {counters.map((counter, index) => {
          return (
            <div key={index} className="all-counters">
              <div className="counter">
                {counter !== 0 && (
                  <button
                    onClick={() => {
                      const newCounters = [...counters];
                      newCounters[index] -= 1;
                      setCounters(newCounters);
                    }}
                  >
                    -
                  </button>
                )}

                <p>{counter}</p>
                {counter < 10 && (
                  <button
                    onClick={() => {
                      const newCounters = [...counters];
                      newCounters[index] += 1;
                      setCounters(newCounters);
                    }}
                  >
                    +
                  </button>
                )}
              </div>
              <div>
                <button
                  onClick={() => {
                    const newCounters = [...counters];
                    newCounters[index] = 0;
                    setCounters(newCounters);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
