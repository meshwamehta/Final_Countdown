import { useState } from "react";
export default function Player() {
  const [playerName,setName]=useState('Unknown entity');
  function handleClick(e){
    setName(e.target.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleClick}/>
        <button>Set Name</button>
      </p>
    </section>
  );
}
