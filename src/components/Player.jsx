import { useState } from "react";
export default function Player() {
  //state to see playername in <h2> only after clicking on button
  const [submitted,setSubmitted]=useState(false);
  const [playerName,setName]=useState('');
  function handleChange(e){
    //here I have to set submitted values to false because once I click setname 
    //submitted will stay true and will change <h2> on every keystroke and to 
    //avoid that I set it to false that means you can only see change name after clicking on setName button 
    setSubmitted(false);
    setName(e.target.value);
    
  }
  function handleSubmit(){
      setSubmitted(true);
  }
  return (
    <section id="player">
      {/*if button is clicked you will see the changed/entered name or else unkown entity displayed */}
      <h2>Welcome {submitted ? playerName :"unknown entity"}</h2>
      
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
