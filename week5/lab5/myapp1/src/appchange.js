import "./App.css";

function Appcolor(props){
    function greetuser(e){
        document.body.style.background = e.target.value;
        alert("Welcome Mr"+ document.getElementById(props.color).value)
    }


    return(
        <body style={{backgroundcolor:'lightblue' , color:'black'}}>
<div classname = "App" >
<h1>{props.heading} </h1> 
      <p style={{color:'blue',font: '30px Arial'}}> How tocreate function comoponent.</p> 
      <label class="label" id="lbl">{props.lbl}</label> 
      <input id={props.color} type="text" /> 
  <button  value={props.color} onClick={greetuser} >Colour me {props.color}</button>

 </div>
</body>
    )
}

export default Appcolor;