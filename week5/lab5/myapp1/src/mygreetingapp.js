import './App.css'; 
function GreetingElementwithprop(props) {
    const greeting = 'hello CN5006 by margil';
    console.log("prop is",props.msg) 
    return ( 
    <div className="App"> 
    <h1>{props.msg}</h1>
    </div> 
    );
}  
  export default GreetingElementwithprop;