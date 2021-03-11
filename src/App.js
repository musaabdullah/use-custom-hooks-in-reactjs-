import { useState, useEffect }  from 'react'
import usefetch from './useFetch';
import './app.css';
function App() {

    var { Data, loading }  = usefetch("https://jsonplaceholder.typicode.com/todos");
    
    
    const [start, setStart] = useState(0);
    const [show, setShow] = useState(5);   
    
    const [completed, setCompleted] = useState(false);

    const showLess  = () => {
        if(show === 5) return ; 
        setShow(show => show - 5)
        if(start === 0) return ;
        setStart(start => start - 5)
    }

    // const changeCompleted = (id) => {
    //     Data = Data.map((user => {
    //         if(id === user.id){
    //         return {
    //             ...user, completed: !user.completed
    //         }
    //     }
    //     }))
    // }
   

    return (
        <>

          { loading && <div className="loading"><i class="fa fa-spinner fa-pulse"></i><span>Loading data...</span></div>}
          {Data && <div className="app">
    
           <div className="container">
               <input type="text" className="container__input" placeholder="Enter todo"/> 
          {Data.slice(start, show).map((user) => (
              <div key={user.id} className="todo">
                  <div className="todo__start">
                  <div className="todo__id">{user.id}.</div>
                  <div className={`todo__title ${user.completed ? "todo__strick":""}`} >{user.title}</div>
                  </div>
                  {/* <div onClick={() => changeCompleted(user.id)} className="todo__complation">{user.completed ? "Completed": "Not completed"}</div> */}
                  <div className="todo__btn">
                  <div  className="todo__complation">{user.completed ? "Completed": "Not completed"}</div>
                  <div className="todo__remove">Remove</div>
                  </div>
                  </div>
              ))}  
              <div className="btn">
                  <button onClick={() => {if(show===200) return ; setStart(start => start + 5); setShow(show => show + 5) } } className="btn__more">Show more</button>
                  <button onClick={() =>  showLess() } className="btn__less">Show less</button>
              </div>
              </div>
         </div> }
        </>
    )
}

export default App
