import { useEffect } from 'react';
import './App.css';
import {useState} from 'react';

/* const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Gender: N/A</h3>
    </>
  );
}
 */
/* const App = () => {
  const there = 8;
  const isThere = false;
  const big = "I am a big guy!"

  return (
    <div className="App">
      <h1>0001 React Course</h1>
      <p>Hello there, this is a dynamic react app constituting to: {there * 8 / 5} bucks! </p>
      <p>Printing there: {isThere ? there : "there is 404"}</p>

      {big ? (
        <>
          <h2>{big}</h2>
          <Person
            age={89 - 9}
            name="Echo"
          />
          <Person
            name="chin"
            age={27}

          />
          <Person />
          <Person />
          <Person />


        </>

      ) : (
        <h3>this is a h3</h3>

      )
      }
    </div> */

/*   );
} */


const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert(" Counter changed to: " + counter)
  }, [counter]);
  
  return (
      <>
        <div className="App">
          <button onClick={(prevCounter) => setCounter(prevCounter => prevCounter + 1)}>+</button>
          <h2>{counter}</h2>
          <button onClick={(prevCounter) => setCounter(prevCounter => prevCounter - 1)}>-</button>
        </div>
      </>
/*       <div className="App">
        <button onClick={() => setCounter(counter+1)}>+</button>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter-1)}>-</button>
      </div>*/
    ); 
}

export default App;
