import {useState} from"react";
function CounterApp(){
    const[count,setCount]=useState(0);
    return(
        <div style={{textAlign:"center"}}>
            <h1>Counter:{count}</h1>
            <button onClick={()=> setCount(count + 1)}>INCREMENT+</button>
             <button onClick={()=> setCount(count - 1)}>DECREMENT-</button>
        </div>
    )
}
export default CounterApp;