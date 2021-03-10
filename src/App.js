import { useState, useEffect }  from 'react'
import usefetch from './useFetch';
import './app.css';
function App() {

    const   {Data}  = usefetch("https://jsonplaceholder.typicode.com/todos");
    const [show, setShow] = useState(5);   

    const showLess  = () => {
        if(show === 5) return ; 
        setShow(show => show - 5)
    }
    return (
        <>
          {Data && <div className="app">
    
           <div className="container">
               <input type="text" className="container__input" placeholder="Enter todo"/> 
          {Data.slice(0, show).map((user) => (
              <div key={user.id} className="todo">
                  <div className="todo__start">
                  <div className="todo__id">{user.id}.</div>
                  <div className="todo__title">{user.title}</div>
                  </div>
                  <div className="todo__complation">{user.completed ? "Completed": "Not completed"}</div>
                  </div>
              ))}  
              <div className="btn">
                  <button onClick={() => setShow(show => show + 5)} className="btn__more">Show more</button>
                  <button onClick={() =>  showLess() } className="btn__less">Show less</button>
              </div>
              </div>
         </div> }
        </>
    )
}

export default App
