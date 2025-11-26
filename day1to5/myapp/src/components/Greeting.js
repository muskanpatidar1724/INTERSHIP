function Greeting(props){
    return(
        <div>
            <h3>Hello,{props.name}!</h3>
            <p>You Are Learning {props.topic} Today</p>
        </div>
    )
}
export default Greeting;